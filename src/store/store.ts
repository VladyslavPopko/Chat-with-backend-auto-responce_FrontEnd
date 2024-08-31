import { configureStore } from '@reduxjs/toolkit'

import { TypedUseSelectorHook, useSelector } from 'react-redux'
import authSlice from './slices/authSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
