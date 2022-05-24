const initialState = {
	show: false,
	title: undefined,
	text: undefined
};

export default (state = initialState, action) => {
	switch (action.type) {
	case 'SHOW_ALERT':
		return { ...state, ...action.payload };
	case 'HIDE_ALERT':
		return { ...state, ...action.payload };
	default:
		return state;
	}
};
