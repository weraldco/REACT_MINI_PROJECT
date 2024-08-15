import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
	username: string;
}

const initialState: LoginState = {
	username: '',
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loggin: (state) => {
			state.value = 'Pedro';
		},
		loggingOut: (state) => {
			state.value = initialState;
		},
	},
});

export const { loggin, loggingOut } = loginSlice.actions;
export default loginSlice.reducer;
