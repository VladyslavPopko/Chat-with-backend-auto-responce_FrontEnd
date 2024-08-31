export interface IUser {
	avatar?: string
	createdAt: string
	email: string
	id: string
	isOnline: string
	name: string
	password: string
	surname: string
	updateAt: string
}

export interface IRegisterUser {
	token: string
	user: IUser
}
