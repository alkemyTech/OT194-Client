import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import activitiesSlice from '../features/activities/activitiesSlice';
import alertSlice from '../features/alert/alertSlice';

export default configureStore({
	reducer: {
		alerts: alertSlice,
		auth: authSlice,
		activities: activitiesSlice
	}
});
