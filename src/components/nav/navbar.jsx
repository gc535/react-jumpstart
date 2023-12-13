import React from 'react'
import { useNavigate } from 'react-router-dom';

import logo from '../../logo.svg'
import './navbar.css'

const Navbar = ({appProps}) => {
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log('TODO: handle log in')
  }

  const handleReturnHome = () => {
    navigate({pathname: "/"})
  }

  const handleUserHome = () => {
    navigate({pathname: "/user"})
  }

  const handleSignOut = async() => {
    console.log('TODO: handle log out')
  }

  return (
      <nav className='nav-container '>
      <ul className='nav-list'> 
        <li onClick={handleReturnHome}><img className='icon' src={logo} /></li>
        {(!appProps.authenticated) ? <li onClick={handleLogin}> Sign in </li> : <>{null}</>}
        {(appProps.authenticated) ? <li onClick={handleUserHome}> User </li> : <>{null}</>}
        {(appProps.authenticated) ? <li onClick={handleSignOut}>Log out</li> : <>{null}</>}
      </ul>
      </nav>
  )
}
export default Navbar;
