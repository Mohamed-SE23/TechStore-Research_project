import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import UserSlice from "./UserInfo.js";
import storeDataSlice from "./storeDataSlice.js";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        user: UserSlice,
        storeData: storeDataSlice,
    }
});

export default Store;