import { useEffect, useState } from 'react'
import { UseFindUser } from '../../../../api/user/UseFindUser'
import { IUser } from '../../../../types/user.types'
import UserInChatMenu from './user-in-chat-menu/UserInChatMenu'
import styles from './UserInChat.module.scss'
import { handleMenu } from './UserInChat.services'

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

	return (
		<div
			className={styles.section}
			onContextMenu={() => handleMenu(isVisibleMenu, setIsVisibleMenu)}
		>
			<img
				className={styles.img}
				src={user?.avatar || '/images/avatar.svg'}
				draggable={false}
			/>
			<h3 className={styles.text}>
				{user?.name} {user?.surname}
			</h3>

			<UserInChatMenu
				setIsVisibleMenu={setIsVisibleMenu}
				userID={userID}
				isVisibleMenu={isVisibleMenu}
			/>
		</div>
	)
}

export default UserInChat
