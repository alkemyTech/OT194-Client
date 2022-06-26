import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helper/axiosInstance';

const initialState = {
	activities: [],
	activity: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// GET ACTIVITIES
export const getActivities = createAsyncThunk(
	'activities/getAllData',
	async (thunkAPI) => {
		try {
			return await axiosInstance('/activities', {}, 'GET');
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

// DELETE ACTIVITIES
export const deleteActivity = createAsyncThunk(
	'activities/deleteData',
	async (id, thunkAPI) => {
		try {
			return axiosInstance(`/activities/${id}`, {}, 'DELETE');
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

// EDIT ACTIVITIES
export const modifyActivity = createAsyncThunk(
	'testimonials/modifyData',
	async (data, thunkAPI) => {
		console.log(data);
		try {
			return axiosInstance(`/activities/${data.id}`, { ...data }, 'PUT');
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

// GET ACTIVITY
export const getActivity = createAsyncThunk(
	'activities/getDataById',
	async (id, thunkAPI) => {
		try {
			return await axiosInstance(`/activities/${id}`, {}, 'GET');
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

export const activitiesSlice = createSlice({
	name: 'activities',
	initialState,
	reducers: {
		resetActivities: () => initialState,
		resetActivitiesReq: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
		resetActivity: (state) => {
			state.openedNews = initialState.activity;
		}
	},
	extraReducers: (builder) => {
		builder
		// GetAll
			.addCase(getActivities.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getActivities.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.activities = action.payload;
			})
			.addCase(getActivities.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
		// GetOne
			.addCase(getActivity.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getActivity.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.activity = action.payload;
			})
			.addCase(getActivity.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
		// Modify
			.addCase(modifyActivity.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(modifyActivity.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(modifyActivity.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const activitiesActions = activitiesSlice.actions;

export default activitiesSlice.reducer;
