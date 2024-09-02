import cn from 'classnames'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { UseDeleteUserFromChat } from '../../../../../api/chat/UseDeleteUserFromChat'
import { UseGetChatinfo } from '../../../../../api/chat/UseGetChatInfo'
import { useToast } from '../../../../../context/ToastContext'
import { changeChat } from '../../../../../store/slices/chatSlice'
import { AppDispatch, useAppSelector } from '../../../../../store/store'
import styles from './UsersInChatMenu.module.scss'

const UserInChatMenu = ({
	setIsVisibleMenu,
	userID,
}: {
	setIsVisibleMenu: Dispatch<SetStateAction<boolean>>
	userID: string
}) => {
	const dispatch: AppDispatch = useDispatch<AppDispatch>()
	const { mutate } = UseDeleteUserFromChat()
	const { showToast } = useToast()

	const { mutate: mutateChat } = UseGetChatinfo()
	const chats = useAppSelector(state => state.chat.chat?.chatUsers)

	const handleKick = () => {
		if (chats) {
			const chat = chats?.filter(chat => chat.userId === userID)

			if (chat)
				mutate(chat[0].id, {
					onSuccess: responseData => {
						mutateChat(
							{ id: responseData.chatId },
							{
								onSuccess: responseData => {
									dispatch(changeChat(responseData))
									setIsVisibleMenu(false)
									showToast('User kicked')
								},
							}
						)
					},
				})
		}
	}

	const handleClose = (e: MouseEvent) => {
		e.stopPropagation()
		setIsVisibleMenu(false)
	}

	return (
		<div className={styles.section}>
			<h3 className={cn(styles.option)} onClick={handleClose}>
				Open profile
			</h3>
			<h3
				className={cn(styles.option, styles.option_danger)}
				onClick={handleKick}
			>
				Kick from chat
			</h3>
			<h3 className={styles.option} onClick={handleClose}>
				Close
			</h3>
		</div>
	)
}

export default UserInChatMenu
