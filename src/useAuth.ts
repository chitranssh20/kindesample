import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [isAuthLoading, setIsAuthLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState<any>(null)
const {login, logout, register , isAuthenticated : isKindeAuthenticated , isLoading : isKindeAuthLoading , getToken, user: kindeUser } = useKindeAuth();

console.log(isAuthLoading, isAuthenticated, isKindeAuthLoading, isKindeAuthenticated, kindeUser);

useEffect(() => {
    console.log("Sets authentication states and users");
    setIsAuthLoading(isKindeAuthLoading);
    setIsAuthenticated(isKindeAuthenticated);
}, [isKindeAuthLoading, isKindeAuthenticated])

useEffect(() => {
    console.log("setting kinde user: ", kindeUser);
    setUser(kindeUser)
}, [kindeUser])



const setToken = async() => {
    const token = await getToken!();
    if(!token) return;
    localStorage.setItem('token', token!);
}
useEffect(() => {
    setToken();
}, [isAuthenticated, user])

return {login, logout, register , isAuthenticated, isAuthLoading , getToken, user };
}
export default useAuth;