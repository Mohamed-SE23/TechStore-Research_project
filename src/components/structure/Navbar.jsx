import Home         from '../../pages/Home/Home';
import About        from '../../pages/About/About';
import Stores       from '../../pages/Stores/Stores';
import Categories   from '../../pages/Categories/Categories';
import Sign         from '../../pages/Signing/sign';
import Register     from '../../pages/register/register';

export const nav = [
    { path: "/",               name: "Home",             element: <Home /> ,          isMenu: true,        isPrivate: false },
    { path: "/about",          name: "About",            element: <About />,          isMenu: true,        isPrivate: false },
    { path: "/sign",           name: "Sign in",          element: <Sign />,           isMenu: false,       isPrivate: false },
    { path: "/register",       name: "Register",         element: <Register />,       isMenu: false,       isPrivate: false },
    { path: "/stores",         name: "Stores",           element: <Stores />,         isMenu: true,        isPrivate: true },
    { path: "/categories",     name: "Categories",       element: <Categories />,     isMenu: true,        isPrivate: true },
]