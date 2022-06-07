import { configureStore } from '@reduxjs/toolkit';
import alertsReducer from '../reducers/alertsReducer';
import authSlice from '../features/auth/authSlice';
import activitiesSlice from '../features/activities/activitiesSlice';
import newsSlice from '../features/news/newsSlice';

export default configureStore({
	reducer: {
		alerts: alertsReducer,
		news: newsSlice,
		auth: authSlice,
		activities: activitiesSlice
	}
});
