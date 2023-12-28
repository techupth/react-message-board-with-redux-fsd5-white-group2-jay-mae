// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../slices/messageBoardSlice";

export const store = configureStore({
  reducer: {
    textInput: inputSlice,
  },
});
