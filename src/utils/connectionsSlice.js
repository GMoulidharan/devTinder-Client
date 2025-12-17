import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name:'connection',
    initialState:null,
    reducers:{
        addConections:(state, action)=>{
            return action.payload
        },
        removeConnections:() => null,
    }
})
export const {addConections, removeConnections} = connectionSlice.actions
export default connectionSlice.reducer