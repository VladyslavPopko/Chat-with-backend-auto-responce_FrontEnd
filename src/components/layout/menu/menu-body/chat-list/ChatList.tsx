import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UseGetUserChats } from '../../../../../api/chat/UseGetUserChats'
import { changeChats } from '../../../../../store/slices/chatsSlice'
import { AppDispatch, useAppSelector } from '../../../../../store/store'
import ChatItem from './chat-item/ChatItem'
import styles from './ChatList.module.scss'

const ChatList = () => {
	const { mutate } = UseGetUserChats()
	const dispatch: AppDispatch = useDispatch<AppDispatch>()
	const user = useAppSelector(state => state.auth.user)
	const chats = useAppSelector(state => state.chats.chats)

	useEffect(() => {
		if (user) {
			mutate(user.id, {
				onSuccess: responseData => {
					dispatch(changeChats(responseData.chatUsers))
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
