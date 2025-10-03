import { NavLink } from 'react-router-dom';
import { FaCalculator } from 'react-icons/fa';

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
  return (
    'relative inline-block px-1 transition-colors duration-300 ' +
    (isActive
      ? 'text-blue-700 font-semibold after:content-[""] after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-blue-700'
      : 'text-gray-700 hover:text-blue-600 after:content-[""] after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out after:h-[2px] after:bg-blue-600')
  );
};


  return (
    <nav className="bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.1)] z-10 sticky top-0">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* ✅ Logo */}
        <div className="flex items-center gap-2">
          <FaCalculator className="text-blue-600 text-2xl animate-pulse" />
          <span className="text-2xl font-bold text-blue-700 tracking-wide">
            Math<span className="text-amber-500">Quiz</span>
          </span>
        </div>

        {/* ✅ Navigation Links */}
        <ul className="flex gap-6 text-base font-medium">
          <li>
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/user" className={navLinkStyle}>
              User
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
