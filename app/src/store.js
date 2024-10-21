import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./futures/users/users.slice";

export const store = configureStore({
    reducer

})