
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helper/axiosInstance';

const initialState = {
	openedNews: {
		image: '',
		name: '',
		category: '',
		content: '',
		slide: ''
	},
	allNews: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// Obtener todas las novedades
export const getAllNews = createAsyncThunk(
	'news/getAllData',
	async (thunkAPI) => {
		try {
			return await axiosInstance('/news', {}, 'GET');
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

// Obtener una novedad en especifico
export const getNews = createAsyncThunk(
	'news/getData',
	async (id, thunkAPI) => {
		try {
			return axiosInstance(`/news/${id}`, {}, 'GET');
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

// Crear una novedad
export const createNews = createAsyncThunk(
	'news/createData',
	async (data, thunkAPI) => {
		try {
			await axiosInstance('/news', { ...data }, 'POST');
			return await axiosInstance('/news', {}, 'GET');
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

// Editar una novedad
export const modifyNews = createAsyncThunk(
	'testimonials/modifyData',
	async (data, thunkAPI) => {
		console.log(data);
		try {
			await axiosInstance(`/news/${data.id}`, { ...data }, 'PUT');
			return await axiosInstance('/news', {}, 'GET');
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

// Eliminar una novedad
export const deleteNews = createAsyncThunk(
	'news/deleteData',
	async (id, thunkAPI) => {
		try {
			return axiosInstance(`/news/${id}`, {}, 'DELETE');
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

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		resetNews: () => initialState,
		resetNewsReq: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
		resetOpenedNews: (state) => {
			state.openedNews = initialState.openedNews;
		}
	},
	extraReducers: (builder) => {
		builder
			// GetAll
			.addCase(getAllNews.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllNews.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.allNews = action.payload;
			})
			.addCase(getAllNews.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			// Get
			.addCase(getNews.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getNews.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.openedNews = action.payload;
			})
			.addCase(getNews.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			// Create
			.addCase(createNews.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createNews.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(createNews.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			// Modify
			.addCase(modifyNews.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(modifyNews.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(modifyNews.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const newsActions = newsSlice.actions;
export default newsSlice.reducer;
