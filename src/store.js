import { configureStore } from "@reduxjs/toolkit";
import { usersReducers } from "./store/users/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducers,
  }
})

export default store;
