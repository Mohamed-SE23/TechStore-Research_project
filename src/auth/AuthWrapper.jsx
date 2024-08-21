import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RenderMenu } from "../components/structure/RenderNavbar";
import { RenderRoutes } from "./Routes";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

    const [ showNav, setShowNav ] = useState(true);

    const location = useLocation();
    useEffect(() => {
        console.log("this is location", location)
        if (location.pathname === '/sign' || location.pathname === '/register') {
            setShowNav(false);
        }

    }, [location]);
    const [ user, setUser ] = useState({name: "Mohamed", isAuthenticated: false});

    const login = (userName, password) => {
        // login function as testing i will try static

        return setUser({name: userName, isAuthenticated: true});
    }

    const logout = () => {
        setUser({...user, isAuthenticated: false});
    }

    return (

        <AuthContext.Provider value={{user, login, logout}}>
            {showNav && <RenderMenu />}
            <RenderRoutes />
        </AuthContext.Provider>
    )
}