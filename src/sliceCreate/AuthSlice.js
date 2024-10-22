import { createSlice  } from "@reduxjs/toolkit"

const initialState={
      isAuthenticated:false
}


const AuthSlice = createSlice({
    name:"authslice",
    initialState,
    reducers:{
        setSelectedPerson: (state,action)=>{
            state.selectedPerson = action.payload
        },
        
        setOpen:(state,action)=>{
            state.open = action.payload
        },
        
      
    },
    
    
})
export const { } = AuthSlice.actions;
export default AuthSlice.reducer;