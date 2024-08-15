// first you make your configuration store.
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './LoginSlice';

export const store = configureStore({
	reducer: {
		login: loginReducer,
	},
});

// Create a store type of getState and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
