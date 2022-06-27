import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../helper/axiosInstance';

const initialState = {
	name: null,
	email: null,
	message: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	resMessage: ''
};

// Creacion de Contacto
export const createContact = createAsyncThunk(
	'contacts/createData',
	async (data, thunkAPI) => {
		try {
			const resp = await axiosInstance('/contacts', data, 'POST');
			return resp;
		} catch (error) {
			const resMessage =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(resMessage);
		}
	}
);

export const contactSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		resetContact: () => initialState,
		resetContactReq: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.resMessage = '';
		}
	},
	extraReducers: (builder) => {
		builder
			// Create
			.addCase(createContact.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createContact.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(createContact.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.resMessage = action.payload;
			});
	}
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;
