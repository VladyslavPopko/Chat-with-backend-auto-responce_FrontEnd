import { useEffect, useState } from 'react'
import { UseFindUser } from '../../../../api/user/UseFindUser'
import { IUser } from '../../../../types/user.types'
import styles from './UserInChat.module.scss'
import UserInChatMenu from './user-in-chat-menu/UserInChatMenu'

const UserInChat = ({ userID }: { userID: string }) => {
	const { mutate } = UseFindUser()
	const [user, setUser] = useState<IUser>()
	const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)

	useEffect(() => {
		mutate(
			{ id: userID },
			{
				onSuccess: responseData => {
					setUser(responseData)
				},
			}
		)
	}, [])

	const handleMenu = () => {
		setIsVisibleMenu(!isVisibleMenu)
	}

	return (
		<div className={styles.section} onContextMenu={handleMenu}>
			<img
				className={styles.img}
				src={user?.avatar || '/images/avatar.svg'}
				draggable={false}
			/>
			<h3 className={styles.text}>
				{user?.name} {user?.surname}
			</h3>
			{isVisibleMenu && <UserInChatMenu setIsVisibleMenu={setIsVisibleMenu} />}
		</div>
	)
}

export default UserInChat
