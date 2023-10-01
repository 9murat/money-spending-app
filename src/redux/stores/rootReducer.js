import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";


export const rootReducer = combineReducers({
    productSlice: productSlice,
    cartSlice:cartSlice,
});