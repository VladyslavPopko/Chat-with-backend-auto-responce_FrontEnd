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
