import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { login, register } from '../../api/auth';


interface Auth {
    loading: 'idle' | 'pending';
    error: any,
    loggedIn: boolean
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
    'auth/login',
    async (body) => {
        const { data } = await register(body);
        return data;
    }
)


const initialState: Auth = {
    loading: 'idle',
    error: '',
    loggedIn: false
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
        });
        builder.addCase(loginUser.rejected, (state, { payload }) => {
            state.loading = 'idle'
        });
    }
})

export const auth = (state: RootState) => state.auth;
export default authSlice.reducer;