import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	show: false,
	title: null,
	text: null,
	showCancelButton: true,
	action: null
};

export const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		resetAlert: () => initialState,
		showAlert: (state, action) => {
			state.show = action.payload.show;
			state.title = action.payload.title;
			state.text = action.payload.text;
			state.showCancelButton = action.payload.showCancelButton;
			state.action = action.payload.action;
		}
	}
});

export const { resetAlert, showAlert } = alertSlice.actions;
export default alertSlice.reducer;
