import { instance } from "../axios/config";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
    'product/getProduct',
    async ()=>{
        const data = await instance.get(`/products`)
        return data
    }
)
export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (product)=>{
        const data = await instance.post(`/products`, product)
        console.log(data);
        
        return data
    }
)
export const removeProduct = createAsyncThunk(
    'product/removeProduct',
    async (id)=>{
         await instance.delete(`/products/${id}`)
        return id
    }
)
export const updateProduct =  createAsyncThunk(
    'product/updateProduct',
    async (product)=>{
        const data = await instance.patch(`/products/${product.id}`, product)
        return data
    }
)