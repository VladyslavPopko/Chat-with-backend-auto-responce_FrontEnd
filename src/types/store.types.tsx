import { IChatDetail, IChatUser } from './api.types'
import { IUser } from './user.types'

export interface IAuthSlice {
	isAuth: boolean
	user: IUser | null
}

export interface IChatSlice {
	chat: IChatDetail | null
}

export interface IChatsSlice {
	chats: IChatUser[] | null
}
