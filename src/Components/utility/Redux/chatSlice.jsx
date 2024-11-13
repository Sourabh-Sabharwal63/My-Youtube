import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      if (state.messages.length > 20) {
        state.messages = state.messages.slice(10, 20);
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
