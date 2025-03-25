import './App.css'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import useAuth from './useAuth';


function App() {
  const {isAuthLoading, isAuthenticated, user} = useAuth();
  console.log(isAuthLoading, isAuthenticated);
  console.log(user);
  const {login, logout,  isAuthenticated : isKindeAuthenticated , isLoading : isKindeAuthLoading ,  user: kindeUser } = useKindeAuth();
  console.log(isKindeAuthLoading, isKindeAuthenticated)
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
