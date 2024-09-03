import { Dispatch, SetStateAction } from 'react'
import { IUser } from '../../../../../types/user.types'
import { addToUsers } from './UserListIme.services'
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
	return (
		<div
			className={styles.section}
			onClick={() => addToUsers(user, users, setUsers)}
		>
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
