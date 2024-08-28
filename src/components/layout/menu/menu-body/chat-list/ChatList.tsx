import ChatItem from './chat-item/ChatItem'
import styles from './ChatList.module.scss'

const ChatList = () => {
	return (
		<div className={styles.section}>
			<ChatItem text='1' />
			<ChatItem text='2' />
			<ChatItem text='3' />
		</div>
	)
}

export default ChatList
