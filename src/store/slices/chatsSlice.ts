import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IChat } from '../../types/api.types'
import { IChatsSlice } from '../../types/store.types'

const initialState: IChatsSlice = {
	chats: null,
}

const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		change: (state, { payload }: PayloadAction<IChat[]>) => {
			state.chats = payload
		},
	},
})

export const { change } = chatsSlice.actions
export default chatsSlice.reducer
