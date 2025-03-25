import './App.css'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import Layout from './Layout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
 
  const {login, logout,  isAuthenticated : isKindeAuthenticated , isLoading : isKindeAuthLoading ,  user: kindeUser } = useKindeAuth();
  console.log("######## states from kinde");
  console.log(isKindeAuthLoading, isKindeAuthenticated)
  console.log("user is : ", kindeUser);
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >

        </Route>
      </Routes>
    </Router>
    {/* <Layout /> */}
      <h1>AUthenticatio sdff n state is : `{isKindeAuthLoading}` </h1>
      <h1>AUthentication state is : `{isKindeAuthenticated}` </h1>
      {kindeUser?.id}
      <button onClick={() => login()} >Login</button>
      <button onClick={() => logout()} > Log out</button>
    </>
  )
}

export default App
