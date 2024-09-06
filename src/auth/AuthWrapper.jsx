import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RenderMenu } from "../components/structure/RenderNavbar";
import { RenderRoutes } from "./Routes";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

    const navigate = useNavigate();
    const [ showNav, setShowNav ] = useState(true);
    

    const location = useLocation();
    useEffect(() => {
        console.log("this is location", location)
        if (location.pathname === '/sign' || location.pathname === '/register') {
            setShowNav(false);
        } else {
            setShowNav(true);
        }

    }, [location]);
    const [ user, setUser ] = useState({name: "Mohamed", type: "customer", isAuthenticated: true});

    const login = (userName, password) => {
        // login function as testing i will try static

        return setUser({name: userName, isAuthenticated: true});
    }
    // logout function 
    const logout = () => {
        setUser({...user, isAuthenticated: false});
        console.log('User is being logged out ...');
    }

    useEffect(() => {
        if (!user.isAuthenticated && window.location.pathname !== '/') {
            console.log("Navigating to home page..."); // Debugging log
          navigate('/');
        }
      }, [user.isAuthenticated]);
    

    return (

        <AuthContext.Provider value={{user, login, logout}}>
            {showNav && <RenderMenu />}
            <RenderRoutes />
        </AuthContext.Provider>
    )
}