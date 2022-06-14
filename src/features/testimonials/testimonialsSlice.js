import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helper/axiosInstance';

const initialState = {
	openedTestimony: {
		name: '',
		image: '',
		content: ''
	},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// Obtener un testimonio en especifico
export const getTestimony = createAsyncThunk(
	'testimonials/getData',
	async (id, thunkAPI) => {
		try {
			return axiosInstance(`/testimonials/${id}`, {}, 'GET');
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Crear un testimonio
export const createTestimony = createAsyncThunk(
	'testimonials/createData',
	async (data, image, thunkAPI) => {
		try {
			if (image) {
				// logica para subir imagen
			}
			return axiosInstance('/testimonials', data, 'POST');
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Editar un testimonio
export const modifyTestimony = createAsyncThunk(
	'testimonials/modifyData',
	async (id, data, image, thunkAPI) => {
		try {
			if (image) {
				// logica para subir imagen
			}
			return axiosInstance(`/testimonials/${id}`, data, 'PATCH');
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const testimonialsSlice = createSlice({
	name: 'testimonials',
	initialState,
	reducers: {
		resetOpenedNews: (state) => {
			state.openedTestimony = initialState.openedTestimony;
		}
	},
	extraReducers: (builder) => {
		builder
			// Get
			.addCase(getTestimony.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTestimony.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.openedTestimony = action.payload;
			})
			.addCase(getTestimony.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			// Create
			.addCase(createTestimony.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createTestimony.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(createTestimony.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			// Modify
			.addCase(modifyTestimony.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(modifyTestimony.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(modifyTestimony.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const testimonialsActions = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
