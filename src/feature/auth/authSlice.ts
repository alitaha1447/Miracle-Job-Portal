import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


interface AuthState {
    user: null | {
        email: string;
        userType: string;
    };
}

const initialState: AuthState = {
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ email: string; userType: string }>) {
            console.log(action.payload);
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        },
    },
});

// export actions
export const { login, logout } = authSlice.actions;

// export reducer
export default authSlice.reducer;
