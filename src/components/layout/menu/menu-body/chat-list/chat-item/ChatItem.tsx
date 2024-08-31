import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UseGetChatinfo } from '../../../../../../api/chat/UseGetChatInfo'
import { changeChat } from '../../../../../../store/slices/chatSlice'
import { AppDispatch } from '../../../../../../store/store'
import { IChatDetail } from '../../../../../../types/api.types'
import { IChatItem } from '../../../../../../types/chat.types'
import styles from './ChatItem.module.scss'

const ChatItem = (chat: IChatItem) => {
	const { mutate } = UseGetChatinfo()
	const [chatInfo, setChatInfo] = useState<IChatDetail>()
	const dispatch: AppDispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		mutate(chat, {
			onSuccess: responseData => {
				setChatInfo(responseData)
			},
		})
	}, [])

	const navigate = useNavigate()

	const openChat = () => {
		if (chatInfo) {
			navigate('/chat')
			dispatch(changeChat(chatInfo))
		}
	}
	return (
		<>
			<div className={styles.chat} onClick={openChat}>
				{chatInfo?.name}
			</div>
			<hr className={styles.hr} />
		</>
	)
}

export default ChatItem
