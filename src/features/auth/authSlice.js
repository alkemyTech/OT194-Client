import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// Register user
export const register = createAsyncThunk('auth/register',
	async (user, thunkAPI) => {
		try {
			return await authService.register(user);
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		};
	}
);

// Login user
export const login = createAsyncThunk('auth/login',
	async (user, thunkAPI) => {
		try {
			return await authService.login(user);
		} catch (error) {
			const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		};
	}
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetAuth: () => initialState,
		resetAuthReq: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		}
	},
	extraReducers: (builder) => {
		builder
		// Register
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
		// Login
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const {
	resetAuth,
	resetAuthReq
} = authSlice.actions;
export default authSlice.reducer;