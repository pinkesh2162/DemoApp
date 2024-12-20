import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../../types/authTypes';

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
    error: null,
    apiKey: null,
    forgetPasswordData: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<{ user: User; apiKey: string }>) {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.apiKey = action.payload.apiKey;
            state.error = null;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.isLoggedIn = false;
            state.user = null;
            state.apiKey = null;
            state.error = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
            state.apiKey = null;
            state.error = null;
        },
        setForgetData(state, action: PayloadAction<object>) {
            state.forgetPasswordData = action.payload;
        },
    },
});

export const { loginSuccess, loginFailure, logout, setForgetData } = authSlice.actions;
export default authSlice.reducer;