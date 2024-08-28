import ChatList from './chat-list/ChatList'
import styles from './MenuBody.module.scss'
const MenuBody = () => {
	return (
		<div className={styles.section}>
			<h2 className={styles.title}>Chats</h2>
			<ChatList />
		</div>
	)
}

export default MenuBody
