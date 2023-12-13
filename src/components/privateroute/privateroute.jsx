import React, { useEffect, useState } from 'react' 
import { Navigate, useNavigate } from 'react-router-dom'

import "./privateroute.css"

const PrivateRoute = ({component, appProps }) => {
  const [ authState, setAuthState ] = useState(undefined)

  useEffect(() => {
   setAuthState(appProps.authenticated)
  }, [appProps.authenticated])

  return (  
      (authState === undefined) ? <>{null}</> :
      (authState == true) ? 
      <div className='private-container'>
        <div className='content-padding'>
          {component}
        </div>
      </div> 
      : 
      // <Navigate to="/auth" state={{ from: location.pathname, search: location.search }}/>
      <Navigate to="/"/>
  )
}
export default PrivateRoute
