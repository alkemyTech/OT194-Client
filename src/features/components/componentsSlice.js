import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	openNav: false
};

export const componentsSlice = createSlice({
	name: 'components',
	initialState,
	reducers: {
		resetComponents: () => initialState,
		changeOpenNav: (state) => {
			state.openNav = !state.openNav;
		},
		closeNav: (state) => {
			state.openNav = false;
		}
	}
});

export const { resetComponents, changeOpenNav, closeNav } = componentsSlice.actions;
export default componentsSlice.reducer;
