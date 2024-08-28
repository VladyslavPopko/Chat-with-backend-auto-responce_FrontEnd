import ChatContent from './chat-content/ChatContent'
import ChatFooter from './chat-footer/ChatFooter'
import styles from './Chat.module.scss'

const Chat = () => {
	return (
		<>
			<div className={styles.section}>
				<ChatContent />
				<ChatFooter />
			</div>
		</>
	)
}

export default Chat
