import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    cartTotalAmount: 0,
    cartTotalQTY: 0,
};

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`${action.payload.title} Quantity Increased`);
            } else {
                const temp = { ...action.payload, cartQuantity: 1, confirmed: false };
                state.cartItems.push(temp);
                toast.success(`${action.payload.title} Added to Cart`);
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        setRemoveItemFromCart: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);

            state.cartItems = removeItem;
            localStorage.setItem("cart", JSON.stringify(state.cartItems));

            toast.success(`${action.payload.title} Removed from the Cart`);
        },

        setIncreaseItemQTY: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;

                toast.success(`${action.payload.title} Quantity Increased`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setDecreaseItemQTY: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.success(`${action.payload.title} Quantity Decreased`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setClearCartItems: (state, action) => {
            state.cartItems = [];
            toast.success(`Cart Cleared successfully`);
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },

        setGetTotals: (state, action) => {
            let {totalAmount, totalQTY} = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const totalPrice = price * cartQuantity;
                
                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQTY += cartQuantity;

                return cartTotal;
            }, {
                totalAmount: 0,
                totalQTY: 0,
            });

            state.cartTotalAmount = totalAmount;
            state.cartTotalQTY = totalQTY;
        },
        // New Reducer to confirm an item
        setConfirmItem: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].confirmed = true; // Set confirmed to true
                toast.success(`${action.payload.title} Confirmed`);
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
    }
});

export const { setOpenCart, setCloseCart, setAddItemToCart, setRemoveItemFromCart, setIncreaseItemQTY, setDecreaseItemQTY, setClearCartItems, setGetTotals, setConfirmItem } = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQTY;

export default CartSlice.reducer;