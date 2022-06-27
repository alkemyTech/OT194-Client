import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helper/axiosInstance';

const initialState = {
	openedTestimony: {
		name: '',
		image: '',
		content: ''
	},
	allTestimonials: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// Obtener todos los testimonios
export const getAllTestimonials = createAsyncThunk(
	'testimonials/getAllData',
	async (thunkAPI) => {
		try {
			return await axiosInstance('/testimonials/', {}, 'GET');
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
	async (data, thunkAPI) => {
		try {
			await axiosInstance('/testimonials', { ...data }, 'POST');
			return await axiosInstance('/testimonials/', {}, 'GET');
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
	async (data, thunkAPI) => {
		console.log(data);
		try {
			return axiosInstance(`/testimonials/${data.id}`, { ...data }, 'PUT');
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

// Eliminar una testimonio
export const deleteTestimony = createAsyncThunk(
	'testimonials/deleteData',
	async (id, thunkAPI) => {
		try {
			return axiosInstance(`/testimonials/${id}`, {}, 'DELETE');
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
		resetOpenedTestimony: (state) => {
			state.openedTestimony = initialState.openedTestimony;
		},
		resetAllTestimonials: (state) => {
			state.allTestimonials = initialState.allTestimonials;
		}
	},
	extraReducers: (builder) => {
		builder
			// GetAll
			.addCase(getAllTestimonials.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllTestimonials.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.allTestimonials = action.payload;
			})
			.addCase(getAllTestimonials.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
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
