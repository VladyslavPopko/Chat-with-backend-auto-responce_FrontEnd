import { useAppSelector } from '../../../../store/store'
import styles from './ChatContent.module.scss'
import Message from './message/Message'

const ChatContent = () => {
	const chat = useAppSelector(state => state.chat.chat)

	if (!chat) return

	return (
		<div className={styles.section}>
			{chat.messages.length ? (
				chat.messages.map(message => (
					<Message key={message.id} message={message} />
				))
			) : (
				<p>No messages yet.</p>
			)}
		</div>
	)
}

export default ChatContent
