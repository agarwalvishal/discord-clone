import React from 'react'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
  const signIn = () => {
    // Do google sign in
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      
      <div className="login__logo">
        <img
          src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
