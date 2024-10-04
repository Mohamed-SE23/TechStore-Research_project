import React, { lazy } from "react";
import { useSelector } from "react-redux";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import VerificationPage from "../../pages/register/VerificationPage";
import { selectCurrentUser } from "../../app/UserInfo";

const Home = lazy(() => import("../../pages/Home/Home"));
const About = lazy(() => import("../../pages/About/About"));
const Stores = lazy(() => import("../../pages/customerPages/Stores/Stores"));
const Categories = lazy(() =>
  import("../../pages/customerPages/Categories/Categories")
);
const Sign = lazy(() => import("../../pages/Signing/sign"));
const Register = lazy(() => import("../../pages/register/register"));
const Profile = lazy(() => import("../../pages/ProviderPages/profile/Profile"));
const ProductSettings = lazy(() =>
  import("../../pages/ProviderPages/Products/ProductSettings")
);
const Orders = lazy(() => import("../../pages/ProviderPages/Orders/Orders"));
const CreateProduct = lazy(() =>
  import("../../pages/ProviderPages/Products/CreateProduct")
);
const EditProduct = lazy(() =>
  import("../../pages/ProviderPages/Products/EditProduct")
);
const NotFound = lazy(() => import("../../pages/NotFound"));
const CustomerSettings = lazy(() =>
  import("../../pages/customerPages/AccountSettings/CustomerSettings")
);
const ProviderSettings = lazy(() =>
  import("../../pages/ProviderPages/AccountSettings/ProviderSettings")
);
const Cart = lazy(() => import("../../pages/customerPages/cart/Cart"));
// const VerificationPage      = lazy(() => import('../../pages/verifications/VerificationPage'));

const user = JSON.parse(localStorage.getItem("user")) || {};
console.log(user.userId);
export const nav = [
  {
    path: "/",
    menuPath: "/",
    name: "Home",
    element: <Home />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/about",
    menuPath: "/about",
    name: "About",
    element: <About />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/verification",
    menuPath: "/verification",
    name: "Reset Password",
    element: <VerificationPage />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/reset-password",
    menuPath: "/reset-password",
    name: "Reset Password",
    element: <ResetPassword />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/sign",
    menuPath: "/sign",
    name: "Sign in",
    element: <Sign />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/register",
    menuPath: "/register",
    name: "Register",
    element: <Register />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: `/:userId/stores`,
    menuPath: `stores`,
    name: "Stores",
    element: <Stores />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: `/:userId/categories`,
    menuPath: `categories`,
    name: "Categories",
    element: <Categories />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/",
    menuPath: "/",
    name: "Cart",
    element: <Cart />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: `/:userId/account`,
    menuPath: `account`,
    name: "Account",
    element: <CustomerSettings />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "*",
    menuPath: "*",
    name: "Not Found",
    element: <NotFound />,
    isMenu: false,
    isPrivate: false,
  },
];

export const providerNav = [
  {
    path: "/",
    menuPath: "/",
    name: "Home",
    element: <Home />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/about",
    menuPath: "/about",
    name: "About",
    element: <About />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/verification",
    menuPath: "/verification",
    name: "Reset Password",
    element: <VerificationPage />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/reset-password",
    menuPath: "/reset-password",
    name: "Reset Password",
    element: <ResetPassword />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/sign",
    menuPath: "/sign",
    name: "Sign in",
    element: <Sign />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/register",
    menuPath: "/register",
    name: "Register",
    element: <Register />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: `:userId/orders`,
    menuPath: `orders`,
    name: "Orders",
    element: <Orders />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: `:userId/profile`,
    menuPath: `profile`,
    name: "Profile",
    element: <Profile />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: `:userId/productSettings`,
    menuPath: `productSettings`,
    name: "Products Settings",
    element: <ProductSettings />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: `:userId/providerAccount`,
    menuPath: `providerAccount`,
    name: "Account",
    element: <ProviderSettings />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: `:userId/productSettings/create`,
    menuPath: `productSettings/create`,
    name: "Create Product",
    element: <CreateProduct />,
    isMenu: false,
    isPrivate: true,
  },
  {
    path: `:userId/productSettings/edit/:id`,
    menuPath: `productSettings/edit/:id`,
    name: "Edit Product",
    element: <EditProduct />,
    isMenu: false,
    isPrivate: true,
  },
];
