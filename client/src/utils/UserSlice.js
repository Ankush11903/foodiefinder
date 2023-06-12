
import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        token:null,
        isAuth:false,

    },
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload.user;
            state.isAuth=true;
            state.token=action.payload.token;
        }
        ,
        userLogout:(state,action)=>{
            state.user=null;
            state.isAuth=false;
            state.token=null;
        }
    }
});
export const {addUser,userLogout}=UserSlice.actions;
export default UserSlice.reducer;