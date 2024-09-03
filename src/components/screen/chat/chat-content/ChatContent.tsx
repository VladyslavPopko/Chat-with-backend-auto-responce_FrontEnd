import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useToast } from '../../../../context/ToastContext'
import useSocket from '../../../../hooks/UseSocket'
import { addMessage } from '../../../../store/slices/chatSlice'
import { AppDispatch, useAppSelector } from '../../../../store/store'
import { IMessage } from '../../../../types/api.types'
import styles from './ChatContent.module.scss'
import Message from './message/Message'

const ChatContent = () => {
	const chat = useAppSelector(state => state.chat.chat)
	const dispatch: AppDispatch = useDispatch()
	const { socketRef } = useSocket('http://localhost:8080')
	const userID = useAppSelector(state => state.auth.user?.id)
	const { showToast } = useToast()

	useEffect(() => {
		const socket = socketRef.current

		if (socket) {
			socket.on('message', (newMessage: IMessage) => {
				dispatch(addMessage(newMessage))
				if (newMessage.recipientId === userID) showToast('New message')
			})

			return () => {
				socket.off('message')
			}
		}
	}, [dispatch, socketRef])

	if (!chat) return <p>Loading...</p>

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
