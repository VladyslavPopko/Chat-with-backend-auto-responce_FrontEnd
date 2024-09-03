import cn from 'classnames'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { UseGetChatinfo } from '../../../../../../api/chat/UseGetChatInfo'
import { USeDeleteMessage } from '../../../../../../api/message/UseDeleteMessage'
import { UseUpdateReadMessage } from '../../../../../../api/message/UseUpdateReadMessage'
import { changeChat } from '../../../../../../store/slices/chatSlice'
import { AppDispatch, useAppSelector } from '../../../../../../store/store'
import { IMessage } from '../../../../../../types/api.types'
import styles from './MessageMenu.module.scss'

const MessageMenu = ({
	isVisibleMenu,
	message,
	setIsVisibleMenu,
}: {
	isVisibleMenu: boolean
	message: IMessage
	setIsVisibleMenu: Dispatch<SetStateAction<boolean>>
}) => {
	const { mutate } = USeDeleteMessage()
	const chatID = useAppSelector(state => state.chat.chat?.id)
	const { mutate: mutateChat } = UseGetChatinfo()
	const dispatch: AppDispatch = useDispatch<AppDispatch>()
	const handleClose = (e: MouseEvent) => {
		e.stopPropagation()
		setIsVisibleMenu(false)
	}
	const handleDelete = (e: MouseEvent) => {
		e.stopPropagation()
		mutate(message.id, {
			onSuccess: () => {
				if (chatID)
					mutateChat(
						{ id: chatID },
						{
							onSuccess: responseData => {
								dispatch(changeChat(responseData))
								setIsVisibleMenu(false)
							},
						}
					)
			},
		})
	}

	const { mutate: mutateUpdateRead } = UseUpdateReadMessage()

	const handleUpdateRead = (e: MouseEvent) => {
		e.stopPropagation()
		mutateUpdateRead(
			{ id: message.id, isRead: !message.isRead },
			{
				onSuccess: () => {
					if (chatID)
						mutateChat(
							{ id: chatID },
							{
								onSuccess: responseData => {
									dispatch(changeChat(responseData))
									setIsVisibleMenu(false)
								},
							}
						)
				},
			}
		)
	}

	return (
		<div className={cn(styles.section, isVisibleMenu && styles.active)}>
			<h3
				className={cn(styles.option, styles.option_success)}
				onClick={handleUpdateRead}
			>
				Mark as {message.isRead ? 'not readed' : 'readed'}
			</h3>
			<h3
				className={cn(styles.option, styles.option_warning)}
				onClick={handleClose}
			>
				Change
			</h3>
			<h3
				className={cn(styles.option, styles.option_delete)}
				onClick={handleDelete}
			>
				Delete
			</h3>
			<h3 className={styles.option} onClick={handleClose}>
				Close
			</h3>
		</div>
	)
}

export default MessageMenu
