import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {
        id: null,
        name: "",
        token: null,
        type: "",        // Type of user (e.g., "buyer", "seller", etc.)
        verified: false, // Whether the user is verified or not
        cOwner: false,   // Is the user a company owner?
        pOwner: false,   // Is the user a product owner?
    },
};

// Creating the user slice
const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Set User Info after login or registration
        setUser: (state, action) => {
            state.user = { ...action.payload };
            localStorage.setItem("user", JSON.stringify(state.user));
            toast.success(`Welcome, ${action.payload.name} to TechStore`);
        },
        // Clear User Info after logout
        clearUser: (state) => {
            state.user = {
                id: null,
                name: "",
                token: null,
                type: "",
                verified: false,
                cOwner: false,
                pOwner: false,
            };
            localStorage.removeItem("user");
            toast.success(`User logged out successfully`);
        },
        // Update verification status
        setUserVerified: (state, action) => {
            state.user.verified = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
            toast.success(`Your Account verified successfully`);
        },
        // Set the user as a company owner
        setCustomerOwner: (state, action) => {
            state.user.cOwner = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
            toast.success(`User updated as Customer Owner`);
        },
        // Set the user as a product owner
        setProductOwner: (state, action) => {
            state.user.pOwner = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        // Set the user type
        setUserType: (state, action) => {
            state.user.type = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        // Update User Token (for refreshing JWT or after re-login)
        updateUserToken: (state, action) => {
            state.user.token = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user));
            toast.success(`Token updated successfully`);
        }
    }
});

// Export actions
export const {
    setUser,
    clearUser,
    setUserVerified,
    setCustomerOwner,
    setProductOwner,
    setUserType,
    updateUserToken,
} = UserSlice.actions;

// Selectors to get specific parts of the state
export const selectCurrentUser = (state) => state.user.user;
export const selectUserVerified = (state) => state.user.user.verified;
export const selectUserType = (state) => state.user.user.type;
export const selectUserToken = (state) => state.user.user.token;
export const selectCustomerOwner = (state) => state.user.user.cOwner;
export const selectProductOwner = (state) => state.user.user.pOwner;

// Export the reducer
export default UserSlice.reducer;
