import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        logIn: (state) => {
            state.isAuth = true;
        },
        logOut: (state) => {
            state.isAuth = false;
        }
    }
})

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;