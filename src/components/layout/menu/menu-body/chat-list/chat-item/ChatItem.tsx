import { useNavigate } from 'react-router-dom'
import { IChatItem } from '../../../../../../types/chat.types'
import styles from './ChatItem.module.scss'

const ChatItem = (chat: IChatItem) => {
	const navigate = useNavigate()

	const openChat = () => {
		navigate('/chat')
	}
	return (
		<>
			<div className={styles.chat} onClick={openChat}>
				{chat.text}
			</div>
			<hr className={styles.hr} />
		</>
	)
}

export default ChatItem
