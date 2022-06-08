import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import activitiesSlice from '../features/activities/activitiesSlice';
import alertSlice from '../features/alert/alertSlice';
import newsSlice from '../features/news/newsSlice';

export default configureStore({
	reducer: {
		alerts: alertSlice,
		news: newsSlice,
		auth: authSlice,
		activities: activitiesSlice
	}
});
