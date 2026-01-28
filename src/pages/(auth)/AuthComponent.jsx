import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthComponent = () => {
  return (
    <div>
      this is auth layout

      <Outlet/>
    </div>
  )
}

export default AuthComponent
