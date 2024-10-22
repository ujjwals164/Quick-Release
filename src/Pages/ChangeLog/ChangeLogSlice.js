import { createSlice  } from "@reduxjs/toolkit";



const initialState={
      selectedPerson:null,
      open:false,
      datas:[]
}


const ChangeLogSlice = createSlice({
    name:"changeLog",
    initialState,
    reducers:{
        setSelectedPerson: (state,action)=>{
            state.selectedPerson = action.payload
        },
        
        setOpen:(state,action)=>{
            state.open = action.payload
        },
        setDatas:(state,action)=>{
            state.datas = action.payload
        },
      
    },
    // extraReducers: (builder) => {
    //     builder
    //       .addCase(setSelectedPerson.fulfilled, (state, action) => {
           
    //         return (state = {
    //           ...state,
    //           status: "idle",
    //           selectedPerson: action.payload,
    //         });
    //       })}
    
})
export const { setSelectedPerson, setDatas , setOpen } = ChangeLogSlice.actions;
export default ChangeLogSlice.reducer;