import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
export const getUser = createAsyncThunk('user/getUser' , async ()=>{
   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
   return response.data;
})

const initialState ={
    users:[]

}

const ApiSlice = createSlice({
    name:"apiHandle",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
         .addCase(getUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      
    }
})

export default ApiSlice.reducer;