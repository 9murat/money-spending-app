import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    products: [],
}
export const getAllProducts = createAsyncThunk(
    'getAllProducts', async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            return data;

        } catch (error) {
            throw error;
        }

    }
)


export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state, action) => {

        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {

        })
    },
})



export const { } = productSlice.actions;
export default productSlice.reducer;