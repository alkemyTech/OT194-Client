import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helper/axiosInstance';

// Get state from localStorage
const user = JSON.parse(localStorage.getItem('user')) ||
	JSON.parse(sessionStorage.getItem('user'));
const remember = JSON.parse(localStorage.getItem('remember')) ||
	JSON.parse(sessionStorage.getItem('remember'));
if (user) {
	localStorage.setItem('user', JSON.stringify(user));
	sessionStorage.setItem('user', JSON.stringify(user));
};
if (remember) {
	localStorage.setItem('remember', true);
	sessionStorage.setItem('remember', true);
};

const initialState = {
	user: user || null,
	remember: remember || null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// Register user
export const register = createAsyncThunk(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			return await axiosInstance('/auth/register', user, 'POST');
		} catch (error) {
			const message =
				(error.response && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Login user
export const login = createAsyncThunk(
	'auth/login',
	async (user, thunkAPI) => {
		try {
			return await axiosInstance('/auth/login', user, 'POST');
		} catch (error) {
			const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	});

// Get user
export const getUserData = createAsyncThunk(
	'auth/getUserData',
	async (thunkAPI) => {
		try {
			return axiosInstance('/auth/me', {}, 'GET');
		} catch (error) {
			const message =
				(error.response && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// DELETE User
export const deleteUserData = createAsyncThunk(
	'auth/deleteUserData',
	async (user, thunkAPI) => {
		try {
			return axiosInstance(`/users/${user.id}`, {}, 'DELETE');
		} catch (error) {
			const message =
				(error.response && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Edit User
export const editUserData = createAsyncThunk(
	'auth/editUserData',
	async (obj, thunkAPI) => {
		try {
			return axiosInstance(`/users/${obj.userId}`, { ...obj.values }, 'PUT');
		} catch (error) {
			const message =
				(error.response && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
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
		},
		setRemember: (state) => {
			state.remember = true;
			localStorage.setItem('remember', true);
			sessionStorage.setItem('remember', true);
		},
		logout: (state) => {
			state.remember = null;
			localStorage.removeItem('user');
			sessionStorage.removeItem('user');
			state.user = null;
			localStorage.removeItem('remember');
			sessionStorage.removeItem('remember');
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
				state.user = action.payload;
				localStorage.setItem('user', JSON.stringify(action.payload));
				sessionStorage.setItem('user', JSON.stringify(action.payload));
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
				state.user = action.payload;
				localStorage.setItem('user', JSON.stringify(action.payload));
				sessionStorage.setItem('user', JSON.stringify(action.payload));
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			// DELETE
			.addCase(deleteUserData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteUserData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = null;
				state.remember = null;
				localStorage.removeItem('user');
				sessionStorage.removeItem('user');
				localStorage.removeItem('remember');
				sessionStorage.removeItem('remember');
			})
			.addCase(deleteUserData.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
		// Edit user
			.addCase(editUserData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(editUserData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
				localStorage.setItem('user', JSON.stringify(action.payload));
				sessionStorage.setItem('user', JSON.stringify(action.payload));
			})
			.addCase(editUserData.rejected, (state, action) => {
				state.message = action.payload;
				state.isLoading = false;
				state.isError = true;
			});
	}
});

export const { resetAuth, resetAuthReq, setRemember, logout } = authSlice.actions;
export default authSlice.reducer;
