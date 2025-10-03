import express from "express"
const router = express.Router();
import User from "../components/User";

router.post("/register-or-login", async (req, res) => {
    const { email, name } = req.body;

    if (!email) {
        return res.status(400).json({ ok: false, error: "Email is required" });
    }

    const emailTrimmed = email.toLowerCase().trim();

    try {
        let user = await User.findOne({ email: emailTrimmed });

        if (!user) {
            // New user
            user = new User({ email: emailTrimmed, name: name || null, createdAt: new Date() });
            await user.save();
        } else {
            // Existing user - update name if provided and name not set before
            if (name && (!user.name || user.name !== name)) {
                user.name = name;
                await user.save();
            }
        }

        return res.json({
            ok: true,
            user: {
                email: user.email,
                name: user.name,
            },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ ok: false, error: "Server error" });
    }
});

module.exports = router;
