import { configureStore } from '@reduxjs/toolkit';
import alertsReducer from '../reducers/alertsReducer';

export default configureStore({
  reducer: {
    alerts: alertsReducer
  },
});
