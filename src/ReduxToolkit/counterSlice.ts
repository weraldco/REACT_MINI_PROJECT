import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
	value: number;
}

const initialState: LoginState = {
	value: 0,
};

const loginSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

export const { increment, decrement } = loginSlice.actions;
export default loginSlice.reducer;
