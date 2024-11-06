import { configureStore } from "@reduxjs/toolkit";
import ChangeLogReducer from "../Pages/ChangeLog/ChangeLogSlice.js";
import ApiSliceReducer from "../sliceCreate/ApiSlice.js"


export const store = configureStore({
    reducer:{
        changeLog : ChangeLogReducer,
        apiHandle : ApiSliceReducer
    }

})