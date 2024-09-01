import { useAppSelector } from '../../../store/store'
import styles from './ListUsersInChat.module.scss'
import UserInChat from './user-in-chat/UserInChat'

const ListUsersInChat = () => {
	const chats = useAppSelector(state => state.chat.chat?.chatUsers)
	return (
		<div className={styles.section}>
			{chats?.map(chat => (
				<UserInChat userID={chat.userId} />
			))}
		</div>
	)
}

export default ListUsersInChat
