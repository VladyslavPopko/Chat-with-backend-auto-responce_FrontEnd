import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IChatUser } from '../../types/api.types'
import { IChatsSlice } from '../../types/store.types'

const initialState: IChatsSlice = {
	chats: null,
}

const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		changeChats: (state, { payload }: PayloadAction<IChatUser[]>) => {
			state.chats = payload
		},
	},
})

export const { changeChats } = chatsSlice.actions
export default chatsSlice.reducer
