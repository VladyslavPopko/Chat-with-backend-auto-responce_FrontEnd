import { configureStore } from '@reduxjs/toolkit'

import { TypedUseSelectorHook, useSelector } from 'react-redux'
import authSlice from './slices/authSlice'
import chatSlice from './slices/chatSlice'
import chatsSlice from './slices/chatsSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		chat: chatSlice,
		chats: chatsSlice,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
