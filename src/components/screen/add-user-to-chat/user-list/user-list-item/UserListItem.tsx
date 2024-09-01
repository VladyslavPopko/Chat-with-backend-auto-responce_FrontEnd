import { Dispatch, SetStateAction } from 'react'
import { IUser } from '../../../../../types/user.types'
import styles from './UserListItem.module.scss'

const UserListItem = ({
	user,
	setUsers,
	users,
}: {
	user: IUser
	users: IUser[] | undefined
	setUsers: Dispatch<SetStateAction<IUser[] | undefined>>
}) => {
	const addToUsers = () => {
		if (users) {
			const usersData = [...users, user]
			setUsers(usersData)
		} else {
			setUsers([user])
		}
	}
	return (
		<div className={styles.section} onClick={addToUsers}>
			<img
				src={user?.avatar ? user.avatar : '/images/avatar.svg'}
				className={styles.img}
				draggable={false}
			/>
			<h3 className={styles.text}>
				{user.name} {user.surname}
			</h3>
		</div>
	)
}

export default UserListItem
