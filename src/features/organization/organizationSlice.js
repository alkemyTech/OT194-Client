import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helper/axiosInstance';

const initialState = {
	organizationData: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// Get organization data
export const getOrganizationData = createAsyncThunk(
	'organization/getOrganizationData',
	async (thunkAPI) => {
		try {
			return await axiosInstance('/organizations/1/public', {}, 'GET');
		} catch (error) {
			const message =
				(error.response && error.response.data && error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const organizationSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetOrganization: () => initialState,
		resetOrganizationReq: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		}
	},
	extraReducers: (builder) => {
		builder
			// Get organization data
			.addCase(getOrganizationData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getOrganizationData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.organizationData = action.payload;
			})
			.addCase(getOrganizationData.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const { resetOrganization, resetOrganizationReq } = organizationSlice.actions;
export default organizationSlice.reducer;
