
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getSession, login, logout, register } from '../../api/auth';


interface Auth {
    loading: 'idle' | 'pending';
    error: any;
    loggedIn: boolean | undefined;
    role: string;
    user: {
        displayName: string;
    } 
}

interface UserLogin {
    email: string;
    password: string;
}

interface UserRegister { 
    email: string;
    password: string;
    phone?: string;
}

export const loginUser = createAsyncThunk<any, UserLogin>(
    'auth/login',
    async (body) => {
        const { data } = await login(body);
        return data;
    }
)

export const registerUser = createAsyncThunk<any, UserRegister>(
    'auth/register',
    async (body) => {
        const { data } = await register(body);
        return data;
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async () => {
        const { data } = await logout();
        return data;
    }
)

export const checkSession = createAsyncThunk(
    'auth/session',
    async () => {
        const { data } = await getSession();
        return data;
    }
)


const initialState: Auth = {
    loading: 'idle',
    error: '',
    loggedIn: undefined,
    role: '',
    user: {
        displayName: ''
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            state.loading = 'idle';
            state.loggedIn = payload.loggedIn;
            state.role = payload.role;
            state.user = payload.user;
        });
        builder.addCase(registerUser.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(registerUser.fulfilled, (state, { payload }) => {
            state.loading = 'idle';
            state.loggedIn = payload.loggedIn;
            state.role = payload.role;
            state.user = payload.user;
        });
        builder.addCase(loginUser.rejected, (state) => {
            state.loading = 'idle'
        });
        builder.addCase(checkSession.fulfilled, (state, { payload }) => { 
            if (payload) {
                state.loggedIn = payload.loggedIn;
                state.role = payload.role;
            }
            else { 
                state.loggedIn = false
                state.role = '';
            }
        });
        builder.addCase(logoutUser.fulfilled, (state) => { 
            state.loggedIn = false;
            state.role = '';
        });
    }
})

export const auth = (state: RootState) => state.auth;
export default authSlice.reducer;