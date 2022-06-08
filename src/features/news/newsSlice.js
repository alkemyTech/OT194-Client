import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helper/axiosInstance';

const initialState = {
	openedNews: {
		image: '',
		title: '',
		category: '',
		content: ''
	},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

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
	async (data, image, thunkAPI) => {
		try {
			if (image) {
				// logica para subir imagen
			}
			return axiosInstance('/news', data, 'POST');
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
	'news/modifyData',
	async (id, data, image, thunkAPI) => {
		try {
			if (image) {
				// logica para subir imagen
			}
			return axiosInstance(`/news/${id}`, data, 'PATCH');
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
		// resetAuth: () => initialState,
		// resetAuthReq: (state) => {
		// 	state.isLoading = false;
		// 	state.isError = false;
		// 	state.isSuccess = false;
		// 	state.message = '';
		// },
		resetOpenedNews: (state) => {
			state.openedNews = initialState.openedNews;
		}
	},
	extraReducers: (builder) => {
		builder
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
