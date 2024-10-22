import { configureStore } from "@reduxjs/toolkit";
import ChangeLogReducer from "../Pages/ChangeLog/ChangeLogSlice.js";


export const store = configureStore({
    reducer:{
        changeLog : ChangeLogReducer
    }

})