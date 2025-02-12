import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserState {
	username: string;
}
const initialStateUser: UserState = {
	username: '',
};

const userLoginSlice = createSlice({
	name: 'user',
	initialState: initialStateUser,
	reducers: {
		login: (state, action: PayloadAction<{ username: string }>) => {
			state.username = action.payload.username;
		},
		logout: (state) => {
			state.username = initialStateUser.username;
		},
	},
});

export const { login, logout } = userLoginSlice.actions;
export default userLoginSlice.reducer;
