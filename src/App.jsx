import { useState, useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import User from './pages/User'
import Login from './pages/Login'
import { userContext } from './context/context'
import TestConfig from './pages/TestConfig'
import Test from './pages/Test'
import Result from './pages/Result'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [user, setuser] = useState({ name: "", email: "", totalAttempts: 0, correctAnswers: 0 })
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
        { path: 'test-config', element: <TestConfig /> },
        { path: 'test', element: <Test /> },
        { path: 'result', element: <Result /> },
      ]
    }
  ])
  return (
    <>
      <userContext.Provider value={{user,setuser}}>
        <RouterProvider router={route} />
      </userContext.Provider>
    </>
  )
}

export default App
