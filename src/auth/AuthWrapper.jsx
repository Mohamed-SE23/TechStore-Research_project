import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RenderMenu } from "../components/structure/RenderNavbar";
import { RenderRoutes } from "./Routes";
import Cart from "../pages/customerPages/cart/Cart";
import { clearUser, selectCurrentUser } from "../app/UserInfo";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

    const navigate = useNavigate();
    const [ showNav, setShowNav ] = useState(true);

    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/sign' || location.pathname === '/register' || location.pathname === '/reset-password' || location.pathname === '/verification') {
            setShowNav(false);
        } else {
            setShowNav(true);
        }

    }, [location]);

    // logout function 
    const logout = () => {
        dispatch(clearUser());
        console.log('User is being logged out ...');
        navigate('/');
    }

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);
    
    return (

        <AuthContext.Provider value={{user, logout}}>
            {showNav && <RenderMenu />}
            {user.account_type === 'customer' &&  <Cart />}
            <RenderRoutes />
        </AuthContext.Provider>
    )
}