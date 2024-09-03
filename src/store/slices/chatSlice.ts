import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IChatDetail, IMessage } from '../../types/api.types'
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
		addMessage(state, action: PayloadAction<IMessage>) {
			if (state.chat) {
				state.chat.messages.push(action.payload)
			}
		},
	},
})

export const { changeChat, addMessage } = chatSlice.actions
export default chatSlice.reducer
