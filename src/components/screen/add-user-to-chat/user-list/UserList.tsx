import { Dispatch, SetStateAction } from 'react'
import { IUser } from '../../../../types/user.types'
import UserListItem from './user-list-item/UserListItem'
import styles from './UserList.module.scss'
import { handleClose } from './UserList.services'

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
	return (
		<div
			className={styles.section}
			onClick={() => handleClose(setIsSearchValue)}
		>
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
