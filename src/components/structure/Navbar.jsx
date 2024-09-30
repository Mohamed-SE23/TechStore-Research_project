import React , { lazy }         from 'react';
import { useSelector } from 'react-redux';
import ResetPassword            from '../../pages/ResetPassword/ResetPassword';
import VerificationPage         from '../../pages/register/VerificationPage';
import { selectCurrentUser } from '../../app/UserInfo';

const Home                  = lazy(() => import('../../pages/Home/Home'));
const About                 = lazy(() => import('../../pages/About/About'));
const Stores                = lazy(() => import('../../pages/customerPages/Stores/Stores'));
const Categories            = lazy(() => import('../../pages/customerPages/Categories/Categories'));
const Sign                  = lazy(() => import('../../pages/Signing/sign'));
const Register              = lazy(() => import('../../pages/register/register'));
const Profile               = lazy(() => import('../../pages/ProviderPages/profile/Profile'));
const ProductSettings       = lazy(() => import('../../pages/ProviderPages/Products/ProductSettings'));
const Orders                = lazy(() => import('../../pages/ProviderPages/Orders/Orders'));
const CreateProduct         = lazy(() => import('../../pages/ProviderPages/Products/CreateProduct'));
const EditProduct           = lazy(() => import('../../pages/ProviderPages/Products/EditProduct'));
const NotFound              = lazy(() => import('../../pages/NotFound'));
const CustomerSettings      = lazy(() => import('../../pages/customerPages/AccountSettings/CustomerSettings'));
const ProviderSettings      = lazy(() => import('../../pages/ProviderPages/AccountSettings/ProviderSettings'));
const Cart                  = lazy(() => import('../../pages/customerPages/cart/Cart'));
// const VerificationPage      = lazy(() => import('../../pages/verifications/VerificationPage'));

 const user = JSON.parse(localStorage.getItem('user')) || {};
 console.log(user.userId)
 export const nav = [

    { path: "/",                            name: "Home",             element: <Home /> ,                isMenu: true,        isPrivate: false },
    { path: "/about",                       name: "About",            element: <About />,                isMenu: true,        isPrivate: false },
    { path: "/verification",                name: "Reset Password",   element: <VerificationPage />,     isMenu: false,       isPrivate: false },
    { path: "/reset-password",              name: "Reset Password",   element: <ResetPassword />,        isMenu: false,       isPrivate: false },
    { path: "/sign",                        name: "Sign in",          element: <Sign />,                 isMenu: false,       isPrivate: false },
    { path: "/register",                    name: "Register",         element: <Register />,             isMenu: false,       isPrivate: false },
    { path: `/${user?.userId || ''}/stores`,         name: "Stores",           element: <Stores />,               isMenu: true,        isPrivate: true },
    { path: `/${user?.userId || ''}/categories`,     name: "Categories",       element: <Categories />,           isMenu: true,        isPrivate: true },
    { path: "/",                            name: "Cart",             element: <Cart />,                 isMenu: true,        isPrivate: true },
    { path: `/${user?.userId || ''}/account`,        name: "Account",          element: <CustomerSettings />,     isMenu: true,        isPrivate: true },
    { path: "*",                            name: "Not Found",        element: <NotFound /> ,            isMenu: false,       isPrivate: false },

]

export const providerNav = [
    { path: "/",                                           name: "Home",                   element: <Home /> ,              isMenu: true,        isPrivate: false },
    { path: "/about",                                      name: "About",                  element: <About />,              isMenu: true,        isPrivate: false },
    { path: "/verification",                               name: "Reset Password",         element: <VerificationPage />,   isMenu: false,       isPrivate: false },
    { path: "/reset-password",                             name: "Reset Password",         element: <ResetPassword />,      isMenu: false,       isPrivate: false },
    { path: "/sign",                                       name: "Sign in",                element: <Sign />,               isMenu: false,       isPrivate: false },
    { path: "/register",                                   name: "Register",               element: <Register />,           isMenu: false,       isPrivate: false },
    { path: `${user?.userId || ''}/orders`,                      name: "Orders",                 element: <Orders />,             isMenu: true,        isPrivate: true },
    { path: `${user?.userId || ''}/profile`,                     name: "Profile",                element: <Profile />,            isMenu: true,        isPrivate: true },
    { path: `${user?.userId || ''}/productSettings`,             name: "Products Settings",      element: <ProductSettings />,    isMenu: true,        isPrivate: true },
    { path: `${user?.userId || ''}/providerAccount`,             name: "Account",                element: <ProviderSettings />,   isMenu: true,        isPrivate: true },
    { path: `${user?.userId || ''}/productSettings/create`,      name: "Create Product",         element: <CreateProduct />,      isMenu: false,        isPrivate: true },
    { path: `${user?.userId || ''}/productSettings/edit/:id`,    name: "Edit Product",           element: <EditProduct />,        isMenu: false,        isPrivate: true },
]
