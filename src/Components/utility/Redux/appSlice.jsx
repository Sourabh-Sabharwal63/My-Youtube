import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
  name:"app",
  initialState:{
   isMenuOpen:true,
   Videos:null,
  
  },
  reducers:{
    changeIsMenuOpen:(state)=>
    {
       state.isMenuOpen = !state.isMenuOpen;
    },
    changeVideos:(state,action)=>{
      state.Videos=action.payload;
    },
    closeMenu:(state)=>{
      state.isMenuOpen=false;
    },

  }
});

export const {changeIsMenuOpen,changeVideos,closeMenu}=appSlice.actions;
export default appSlice.reducer;