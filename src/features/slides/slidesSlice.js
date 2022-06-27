
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helper/axiosInstance';

const initialState = {
	slides: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// GET ALL SLIDES OF AN ENTRY
export const getAllSlides = createAsyncThunk(
	'slides/getAllData',
	async (id, thunkAPI) => {
		console.log(id);
		try {
			return await axiosInstance(`/slides/${id}`, {}, 'GET');
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

// POST SLIDE
export const createSlide = createAsyncThunk(
	'slides/createData',
	async (data, thunkAPI) => {
		try {
			console.log(data);
			return axiosInstance(`/slides/${data.newsId}`, { ...data.slide }, 'POST');
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

// PUT SLIDE
export const modifySlide = createAsyncThunk(
	'slides/modifyData',
	async (data, thunkAPI) => {
		try {
			console.log(data);
			return axiosInstance(`/slides/${data.slide.id}`, { ...data.slide }, 'PUT');
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

export const slidesSlice = createSlice({
	name: 'slides',
	initialState,
	reducers: {
		resetSlides: () => initialState,
		resetSlidesReq: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		}
	},
	extraReducers: (builder) => {
		builder
			// GetAll
			.addCase(getAllSlides.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllSlides.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.slides = action.payload;
			})
			.addCase(getAllSlides.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})

			// Create
			.addCase(createSlide.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createSlide.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(createSlide.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})

			// Modify
			.addCase(modifySlide.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(modifySlide.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(modifySlide.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const slidesActions = slidesSlice.actions;
export default slidesSlice.reducer;
