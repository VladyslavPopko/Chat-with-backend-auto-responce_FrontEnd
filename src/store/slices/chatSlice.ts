import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IChatDetail } from '../../types/api.types'
import { IChatSlice } from '../../types/store.types'

const initialState: IChatSlice = {
	chat: null,
}

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		changeChat: (state, { payload }: PayloadAction<IChatDetail | null>) => {
			state.chat = payload
		},
	},
})

export const { changeChat } = chatSlice.actions
export default chatSlice.reducer
