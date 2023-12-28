// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputText: "",
  showMessage: ["Hello all ! This is first message."],
};

export const inputSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    textInput: (state, action) => {
      state.inputText = action.payload;
    },
    addMessage: (state) => {
      state.showMessage.push(state.inputText);
    },
    deleteMessage: (state, action) => {
      state.showMessage.splice(action.payload, 1);
    },
  },
});

export const { textInput, addMessage, deleteMessage } = inputSlice.actions;

export default inputSlice.reducer;
