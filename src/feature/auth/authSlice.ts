import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


interface AuthState {
    // isAuthenticated: boolean;
    user: null | { email: string }; // adjust fields as per your app
}

const initialState: AuthState = {
    // isAuthenticated: false,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<AuthState["user"]>) {
            console.log(action.payload)
            // state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            // state.isAuthenticated = false;
            state.user = null;
        },
    },
});

// export actions
export const { login, logout } = authSlice.actions;

// export reducer
export default authSlice.reducer;
