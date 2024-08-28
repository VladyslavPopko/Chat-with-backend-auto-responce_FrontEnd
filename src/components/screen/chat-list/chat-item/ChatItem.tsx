import { IChatItem } from '../../../../types/chat.types'
import styles from './ChatItem.module.scss'

const ChatItem = (chat: IChatItem) => {
	return (
		<>
			<div className={styles.chat}>{chat.text}</div>
			<hr className={styles.hr} />
		</>
	)
}

export default ChatItem
