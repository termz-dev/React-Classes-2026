import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthComponent = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token')
    if (token) {
      // User is logged in, redirect to dashboard
      navigate('/dashboard')
    }
  }, [navigate])

  return (
    <div>
         <Outlet />
    </div>
  )
}

export default AuthComponent

