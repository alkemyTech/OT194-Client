import { configureStore } from '@reduxjs/toolkit';
import alertsReducer from '../reducers/alertsReducer';
import authSlice from '../features/auth/authSlice';

export default configureStore({
	reducer: {
		alerts: alertsReducer,
		auth: authSlice
	}
});
