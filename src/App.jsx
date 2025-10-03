import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import User from './pages/User'
import Login from './pages/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [user, setuser] = useState([])
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Contact', element: <Contact /> },
        { path: 'User', element: <User /> },
        { path: 'Login', element: <Login /> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
