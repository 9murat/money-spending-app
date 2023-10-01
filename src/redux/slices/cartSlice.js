import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    totalPrice: 0,
    itemCount: 0,
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findItem = state.carts.findIndex(item => item.id === action.payload.id);
            if (findItem !== -1) {
                const existingProduct = state.carts[findItem];
                existingProduct.quantity += 1;

            } else {
                const product = { ...action.payload, quantity: 1 };
                state.carts.push(product);
                state.itemCount = state.carts.reduce((count, item) => count + 1, 0);
            }
            state.totalPrice += parseFloat(action.payload.price * 1);

        },
        decreaseItem: (state, action) => {
            const findItem = state.carts.findIndex(item => item.id === action.payload.id);
            if (findItem !== -1) {
                const existingProduct = state.carts[findItem];
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                    state.totalPrice -= parseFloat(existingProduct.price * 1);
                }
                else {
                    state.itemCount -= 1;
                    state.totalPrice -= parseFloat(existingProduct.price * 1);
                    state.carts.splice(findItem, 1);
                }
            }

        },
        clearAllCart: (state) => {
            state.carts = [];
            state.totalPrice = 0;
            state.itemCount = 0;
        },
        removeItem: (state, action) => {
            const newCarts = state.carts.filter(item => item.id !== action.payload.id);
            state.carts = newCarts;
            const newTotalPrice = (parseFloat(action.payload.price) * parseFloat(action.payload.quantity));
            state.totalPrice -= newTotalPrice;
            state.itemCount -= 1;

        }

    },
})


export const { addToCart, decreaseItem, clearAllCart ,removeItem} = cartSlice.actions;
export default cartSlice.reducer;