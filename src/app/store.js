import { configureStore } from '@reduxjs/toolkit';
import alertsReducer from '../reducers/alertsReducer';
import authSlice from '../features/auth/authSlice';
import activitiesSlice from '../features/activities/activitiesSlice';

export default configureStore({
	reducer: {
		alerts: alertsReducer,
		auth: authSlice,
		activities: activitiesSlice
	}
});
