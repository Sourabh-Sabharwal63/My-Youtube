import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import chatSlice from "./chatSlice"
const store=configureStore({
  reducer:{
    AppSlice:appSlice,
    ChatSlice:chatSlice,
   
   
  }
})
export default store;
