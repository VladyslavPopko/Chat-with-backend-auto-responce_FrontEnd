export interface ILogin {
	email: string
	password: string
}

export interface IRegister extends ILogin {
	name: string
	surname: string
}

export interface IUpdateProfile {
	id?: string
	name: string
	surname: string
	email: string
	avatar?: string
}

export interface IChatUser {
	id: string
	chatId: string
	userId: string
	name: string
}

export interface IGetUserChats {
	chatUsers: IChatUser[]
}

export interface IChat {
	id: string
	name: string
	createdAt: string
	updatedAt: string
}

export interface IAddUserToChat {
	chatId: string
	users: string[]
}

export interface IGetChatInfo {
	id: string
}

export interface IChatDetail {
	id: string
	name: string
	createdAt: string
	updatedAt: string
	chatUsers: IChatUser[]
	messages: IMessage[]
}

export interface ISendMessage {
	text: string
	senderId: string
	recipientId: string
	chatId: string
}

export interface IMessage extends ISendMessage {
	id: string
	isRead: boolean
	createdAt: string
	updatedAt: string
}
