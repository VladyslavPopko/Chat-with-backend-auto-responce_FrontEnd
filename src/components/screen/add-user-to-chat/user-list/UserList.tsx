import { Dispatch, SetStateAction } from 'react'
import { IUser } from '../../../../types/user.types'
import styles from './UserList.module.scss'
import UserListItem from './user-list-item/UserListItem'

const UserList = ({
	setIsSearchValue,
	searchValue,
	setUsers,
	users,
}: {
	setIsSearchValue: Dispatch<SetStateAction<boolean>>
	setUsers: Dispatch<SetStateAction<IUser[] | undefined>>
	searchValue: IUser[] | undefined
	users: IUser[] | undefined
}) => {
	const handleClose = () => {
		setIsSearchValue(false)
	}

	return (
		<div className={styles.section} onClick={handleClose}>
			{searchValue?.length ? (
				searchValue?.map(user => (
					<UserListItem user={user} users={users} setUsers={setUsers} />
				))
			) : (
				<p className={styles.text}>No such name user</p>
			)}
		</div>
	)
}

export default UserList
