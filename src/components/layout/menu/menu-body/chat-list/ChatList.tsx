import { useEffect, useState } from 'react'
import { UseGetUserChats } from '../../../../../api/chat/UseGetUserChats'
import { useAppSelector } from '../../../../../store/store'
import { IChatUser } from '../../../../../types/api.types'
import ChatItem from './chat-item/ChatItem'
import styles from './ChatList.module.scss'

const ChatList = () => {
	const { mutate } = UseGetUserChats()
	const user = useAppSelector(state => state.auth.user)
	const [chats, setChats] = useState<IChatUser[]>()

	useEffect(() => {
		if (user) {
			mutate(user.id, {
				onSuccess: responseData => {
					setChats(responseData.chatUsers)
				},
			})
		}
	}, [user])

	return (
		<div className={styles.section}>
			{chats?.map(chat => (
				<ChatItem key={chat.id} id={chat.chatId} />
			))}
		</div>
	)
}

export default ChatList
