import { Dispatch, SetStateAction } from 'react'
import { IUser } from '../../../../../types/user.types'

export const addToUsers = (
	user: IUser,
	users: IUser[] | undefined,
	setUsers: Dispatch<SetStateAction<IUser[] | undefined>>
) => {
	if (users) {
		const usersData = [...users, user]
		setUsers(usersData)
	} else {
		setUsers([user])
	}
}
