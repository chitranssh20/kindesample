import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'


function App() {
  const {login, logout,  isAuthenticated : isKindeAuthenticated , isLoading : isKindeAuthLoading ,  user: kindeUser } = useKindeAuth();
  console.log("user is : ", kindeUser);
  return (
    <>
      <h1>AUthentication state is : `{isKindeAuthLoading}` </h1>
      <h1>AUthentication state is : `{isKindeAuthenticated}` </h1>
      <button onClick={() => login()} >Login</button>
      <button onClick={() => logout()} > Log out</button>
    </>
  )
}

export default App
