import useAuth from './useAuth';
const Layout = () => {
    const {isAuthLoading, isAuthenticated, user} = useAuth();
    console.log("##### states from useauth");
    console.log(isAuthLoading, isAuthenticated);
    console.log(user);
    return (
        <>
        </>
    )
}

export default Layout;