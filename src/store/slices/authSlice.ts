import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthSlice } from '../../types/store.types'
import { IUser } from '../../types/user.types'

const initialState: IAuthSlice = {
	isAuth: false,
	user: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		changeIsAuth: (state, { payload }: PayloadAction<boolean>) => {
			state.isAuth = payload
		},

		changeUser: (state, { payload }: PayloadAction<IUser>) => {
			state.user = payload
		},
	},
})

export const { changeIsAuth, changeUser } = authSlice.actions
export default authSlice.reducer
