import React , { lazy }       from 'react';

const Home                  = lazy(() => import('../../pages/Home/Home'));
const About                 = lazy(() => import('../../pages/About/About'));
const Stores                = lazy(() => import('../../pages/customerPages/Stores/Stores'));
const Categories            = lazy(() => import('../../pages/customerPages/Categories/Categories'));
const Sign                  = lazy(() => import('../../pages/Signing/sign'));
const Register              = lazy(() => import('../../pages/register/register'));
const Profile               = lazy(() => import('../../pages/ProviderPages/profile/Profile'));
const ProductSettings       = lazy(() => import('../../pages/ProviderPages/Products/ProductSettings'));
const Orders                = lazy(() => import('../../pages/ProviderPages/Orders'));
const CreateProduct         = lazy(() => import('../../pages/ProviderPages/Products/CreateProduct'));
const EditProduct           = lazy(() => import('../../pages/ProviderPages/Products/EditProduct'));
const NotFound              = lazy(() => import('../../pages/NotFound'));
const CustomerSettings      = lazy(() => import('../../pages/customerPages/AccountSettings/CustomerSettings'));
const ProviderSettings      = lazy(() => import('../../pages/ProviderPages/AccountSettings/ProviderSettings'));
const Cart                  = lazy(() => import('../../pages/customerPages/cart/Cart'));
const VerificationPage      = lazy(() => import('../../pages/verifications/VerificationPage'));

const user = {name: 'userName'};
const ProUser = {name: 'proUserName'}


export const nav = [
    { path: "/",                            name: "Home",             element: <Home /> ,                isMenu: true,        isPrivate: false },
    { path: "/about",                       name: "About",            element: <About />,                isMenu: true,        isPrivate: false },
    { path: "/verifyAccount",               name: "Verify",           element: <VerificationPage />,     isMenu: false,       isPrivate: true },
    { path: "/sign",                        name: "Sign in",          element: <Sign />,                 isMenu: false,       isPrivate: false },
    { path: "/register",                    name: "Register",         element: <Register />,             isMenu: false,       isPrivate: false },
    { path: `/${user.name}/stores`,         name: "Stores",           element: <Stores />,               isMenu: true,        isPrivate: true },
    { path: `/${user.name}/categories`,     name: "Categories",       element: <Categories />,           isMenu: true,        isPrivate: true },
    { path: "/",                            name: "Cart",             element: <Cart />,                 isMenu: true,        isPrivate: true },
    { path: `/${user.name}/account`,        name: "Account",          element: <CustomerSettings />,     isMenu: true,        isPrivate: true },
    { path: "*",                            name: "Not Found",        element: <NotFound /> ,            isMenu: false,       isPrivate: false },

]

export const providerNav = [
    { path: "/",                                           name: "Home",                   element: <Home /> ,              isMenu: true,        isPrivate: false },
    { path: "/about",                                      name: "About",                  element: <About />,              isMenu: true,        isPrivate: false },
    { path: "/verifyAccount",                              name: "Verify",                 element: <VerificationPage />,   isMenu: false,       isPrivate: true },
    { path: "/sign",                                       name: "Sign in",                element: <Sign />,               isMenu: false,       isPrivate: false },
    { path: "/register",                                   name: "Register",               element: <Register />,           isMenu: false,       isPrivate: false },
    { path: `${ProUser.name}/orders`,                      name: "Orders",                 element: <Orders />,             isMenu: true,        isPrivate: true },
    { path: `${ProUser.name}/profile`,                     name: "Profile",                element: <Profile />,            isMenu: true,        isPrivate: true },
    { path: `${ProUser.name}/productSettings`,             name: "Products Settings",      element: <ProductSettings />,    isMenu: true,        isPrivate: true },
    { path: `${ProUser.name}/providerAccount`,             name: "Account",                element: <ProviderSettings />,   isMenu: true,        isPrivate: true },
    { path: `${ProUser.name}/productSettings/create`,      name: "Create Product",         element: <CreateProduct />,      isMenu: false,        isPrivate: true },
    { path: `${ProUser.name}/productSettings/edit`,        name: "Edit Product",           element: <EditProduct />,        isMenu: false,        isPrivate: true },
]
