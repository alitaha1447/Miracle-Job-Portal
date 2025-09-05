import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    // rtk query slices go here
});

export default rootReducer;