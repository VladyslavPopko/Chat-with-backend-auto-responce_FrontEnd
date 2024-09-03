import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UseGetChatinfo } from '../../../../../../api/chat/UseGetChatInfo'
import { UseFindMessage } from '../../../../../../api/message/UseFindMessage'
import { changeChat } from '../../../../../../store/slices/chatSlice'
import { AppDispatch, useAppSelector } from '../../../../../../store/store'
import {
	IChatDetail,
	IChatUser,
	IMessage,
} from '../../../../../../types/api.types'
import { formatDate } from '../../../../../../utils/formatDate'
import styles from './ChatItem.module.scss'
import ChatItemMenu from './chat-item-menu/ChatItemMenu'

const ChatItem = ({ chat }: { chat: IChatUser }) => {
	const { mutate } = UseGetChatinfo()
	const [chatInfo, setChatInfo] = useState<IChatDetail>()
	const chatState = useAppSelector(state => state.chat.chat)
	const dispatch: AppDispatch = useDispatch<AppDispatch>()
	const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)
	const [lastMessage, setLastMessage] = useState<IMessage>()

	useEffect(() => {
		mutate(
			{ id: chat.chatId },
			{
				onSuccess: responseData => {
					setChatInfo(responseData)
				},
			}
		)
	}, [chatState])

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
	const [isSelected, setIsSelected] = useState<boolean>(false)
	const checkSelected = () => {
		if (chatState?.id === chatInfo?.id && chatState && chatInfo) {
			setIsSelected(true)
		} else {
			setIsSelected(false)
		}
	}

	useEffect(() => {
		checkSelected()
	}, [chat])

	const { mutate: mutateLastMessage } = UseFindMessage()

	useEffect(() => {
		if (chat && chatInfo && chatInfo.messages?.length) {
			const length = chatInfo.messages.length
			const lastMessageData = chatInfo.messages[length - 1]
			mutateLastMessage(lastMessageData.id, {
				onSuccess: responseData => {
					setLastMessage(responseData)
				},
			})
		}
	}, [chatInfo])

	return (
		<>
			<div
				className={cn(styles.chat, isSelected && styles.active)}
				onClick={openChat}
				onContextMenu={handleMenu}
			>
				<img
					src={
						chat.displayedAvatar
							? chat.displayedAvatar
							: chatInfo?.avatar
							? chatInfo?.avatar
							: '/images/avatar.svg'
					}
					className={styles.img}
				/>
				<div className={styles.content}>
					<h2 className={styles.title}>
						{chat.displayedName || chatInfo?.name}
					</h2>
					<h3 className={styles.text}>
						{lastMessage ? lastMessage.text : 'No messages yet'}
					</h3>

					<ChatItemMenu
						setIsVisibleMenu={setIsVisibleMenu}
						chatInfo={chatInfo}
						chat={chat}
						isVisibleMenu={isVisibleMenu}
					/>
				</div>
				<h3 className={styles.date}>
					{lastMessage && formatDate(lastMessage.updatedAt)}
				</h3>
			</div>
			<hr className={styles.hr} />
		</>
	)
}

export default ChatItem
