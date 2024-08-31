import { IUser } from './user.types'

export interface IAuthSlice {
	isAuth: boolean
	user: IUser | null
}
