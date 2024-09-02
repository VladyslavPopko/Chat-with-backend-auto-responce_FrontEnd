export interface IFormAuth {
	email: string
	password: string
}
export interface IFormSearch {
	name: string
}

export interface IFormProfile {
	id?: string
	name: string
	surname: string
	email: string
	image?: string
}

export interface IFormMessage {
	message: string
}

export interface IFormRegister extends IFormProfile {
	password: string
}

export interface IFormNewChat {
	name: string
}
export interface IPrivateUser {
	userId: string
	name: string
	avatar?: string
}
export interface IFormPrivateChat {
	name: string
	users: IPrivateUser[]
}
