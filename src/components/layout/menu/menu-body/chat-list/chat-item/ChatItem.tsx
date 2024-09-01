import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UseGetChatinfo } from '../../../../../../api/chat/UseGetChatInfo'
import { changeChat } from '../../../../../../store/slices/chatSlice'
import { AppDispatch } from '../../../../../../store/store'
import { IChatDetail } from '../../../../../../types/api.types'
import { IChatItem } from '../../../../../../types/chat.types'
import styles from './ChatItem.module.scss'
import ChatItemMenu from './chat-item-menu/ChatItemMenu'

const ChatItem = (chat: IChatItem) => {
	const { mutate } = UseGetChatinfo()
	const [chatInfo, setChatInfo] = useState<IChatDetail>()
	const dispatch: AppDispatch = useDispatch<AppDispatch>()
	const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)

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

	const handleMenu = () => {
		setIsVisibleMenu(!isVisibleMenu)
	}
	return (
		<>
			<div
				className={styles.chat}
				onClick={openChat}
				onContextMenu={handleMenu}
			>
				{chatInfo?.name}
				{isVisibleMenu && (
					<ChatItemMenu
						setIsVisibleMenu={setIsVisibleMenu}
						chatInfo={chatInfo}
					/>
				)}
			</div>
			<hr className={styles.hr} />
		</>
	)
}

export default ChatItem
