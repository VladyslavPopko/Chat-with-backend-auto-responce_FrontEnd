import cn from 'classnames'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { UseGetChatinfo } from '../../../../../../api/chat/UseGetChatInfo'
import { USeDeleteMessage } from '../../../../../../api/message/UseDeleteMessage'
import { changeChat } from '../../../../../../store/slices/chatSlice'
import { AppDispatch, useAppSelector } from '../../../../../../store/store'
import { IMessage } from '../../../../../../types/api.types'
import styles from './MessageMenu.module.scss'

const MessageMenu = ({
	message,
	setIsVisibleMenu,
}: {
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
	return (
		<div className={styles.section}>
			<h3
				className={cn(styles.option, styles.option_success)}
				onClick={handleClose}
			>
				Mark as readed
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
