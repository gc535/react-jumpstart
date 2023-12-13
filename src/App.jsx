import React, { useEffect, useState } from 'react'


import Home from './pages/home/home'
import User from './pages/user/user'
import Error from './pages/error/error'

import Navbar from './components/nav/navbar'
import Footer from './components/footer/footer'
import PrivateRoute from './components/privateroute/privateroute'

import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

const App = () => {
  const [ authenticated, setAuthenticated ] = useState(true)
  const [ user, setUser ] = useState(null)

  // TODO: change and uncomment below to handle user login
  // handle user authentication
  // useEffect(() => {
  //   if (true) {
  //     setUser(idToken.payload)
  //     setAuthenticated(true)
  //   }
  //   else {
  //     setUser(null)
  //     setAuthenticated(false)
  //     console.log('[Info]: No valid user.')
  //   }
  // }, [])


  return (
  <div className='app'>
    <AppRoutes appProps={{authenticated, setAuthenticated, user, setUser}}/>
  </div>  
  )
}
export default App

const AppRoutes = ({appProps}) => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout appProps={appProps}/>} >
        <Route index element={<Home appProps={appProps}/>} />
        <Route path="user" element={<PrivateRoute appProps={appProps} component={<User appProps={appProps}/>}/>} />
        <Route path="*" element={<Error />} />
      </Route>
      {/*<Route path="*" element={<Navigate to="/404" />} />*/}
    </Routes>
  </BrowserRouter>
  )
}


const AppLayout = ({appProps}) => {
  return (
  <div>
    <Navbar appProps={appProps}/>
    <Outlet />
    <Footer />
  </div>  
  )
}
