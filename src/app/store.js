import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import alertsReducer from '../reducers/alertsReducer';

export default configureStore({
  reducer: {
    counter: counterReducer, 
    alerts: alertsReducer
  },
});
