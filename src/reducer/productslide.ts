import {createSlice} from '@reduxjs/toolkit'
import { addProduct,updateProduct,removeProduct,getProduct } from '../api/product'

const initialState = {
    products: [],
    loading: false,
    error: ""
} as {
    [x: string]: any, products: [], loading: boolean, error: string
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getProduct.pending, (state, action)=>{
            state.loading = true;
        })
        builder.addCase(getProduct.fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action.payload
        })
        builder.addCase(getProduct.rejected, (state, action)=>{
            state.loading = false;
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
        })
       
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const product = action.payload;
            state.products = state.products.map((item: any) => item.id == product.id ? product : item);
        })
       
        builder.addCase(removeProduct.fulfilled, (state, action) => {
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id);
        })
    }

})
export const productReducer = productSlice.reducer