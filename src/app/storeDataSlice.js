import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    storeData: localStorage.getItem('storeData') ? JSON.parse(localStorage.getItem('storeData')) : []
};

// Creating the storeData slice
const storeDataSlice = createSlice({
    name: "storeData",
    initialState,
    reducers: {
        // Update the entire storeData object
        setStoreData: (state, action) => {
            state.storeData = { ...action.payload };
            localStorage.setItem("storeData", JSON.stringify(state.storeData));
            toast.success(`Store data updated successfully`);
        },
        // Clear the storeData (e.g., after store deletion)
        clearStoreData: (state) => {
            state.storeData = [];
            localStorage.removeItem("storeData");
            toast.success(`Store data cleared successfully`);
        },
    },
});

// Export actions
export const { setStoreData, clearStoreData } = storeDataSlice.actions;

// Selectors to get specific parts of the storeData state
export const selectStoreData = (state) => state.storeData.storeData;
export const selectStoreId = (state) => state.storeData.storeData.id;
export const selectStoreName = (state) => state.storeData.storeData.name;
export const selectStoreOwner = (state) => state.storeData.storeData.owner;
export const selectStoreProducts = (state) => state.storeData.storeData.products;
export const selectStoreLocation = (state) => state.storeData.storeData.location;
export const selectStoreSocialMedia = (state) => state.storeData.storeData.socialMedia;

// Export the reducer
export default storeDataSlice.reducer;
