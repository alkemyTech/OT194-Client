import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import activityService from './activityService';

const initialState = {
	activities: [],
	activity: {
		id: '',
		name: '',
		content: '',
	},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// POST ACTIVITY
export const createActivity = createAsyncThunk(
	'/activities',
	async (data, thunkAPI) => {
		try {
			return await activityService.createActivity(data);
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

// PATCH ACTIVITY
export const updateActivity = createAsyncThunk(
	'auth/login',
	async (data, thunkAPI) => {
		try {
			return await activityService.updateActivity(data);
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
		resetActivitiesReq: (state) => {},
	},
	extraReducers: (builder) => {
		builder
			// Create waiting
			.addCase(createActivity.pending, (state) => {
				state.isLoading = true;
				state.isSuccess = false;
				state.isError = false;
				state.message = '';
			})

			// Create success
			.addCase(createActivity.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.message = '';
				state.activities = [...state.activities, action.payload];
			})

			.addCase(createActivity.rejected, (state, action) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { resetAactivities, resetActivitiesReq } = activitiesSlice.actions;

export default activitiesSlice.reducer;
