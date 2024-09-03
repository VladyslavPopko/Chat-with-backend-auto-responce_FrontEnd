import cn from 'classnames'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { UseDeleteUserFromChat } from '../../../../../api/chat/UseDeleteUserFromChat'
import { UseGetChatinfo } from '../../../../../api/chat/UseGetChatInfo'
import { useToast } from '../../../../../context/ToastContext'
import { changeChat } from '../../../../../store/slices/chatSlice'
import { AppDispatch, useAppSelector } from '../../../../../store/store'
import { handleClose } from './UseInChatMenu.services'
import styles from './UsersInChatMenu.module.scss'

const UserInChatMenu = ({
	setIsVisibleMenu,
	userID,
	isVisibleMenu,
}: {
	isVisibleMenu: boolean
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

	return (
		<div className={cn(styles.section, isVisibleMenu && styles.active)}>
			<h3
				className={cn(styles.option)}
				onClick={(e: MouseEvent<HTMLHeadingElement>) =>
					handleClose(e, setIsVisibleMenu)
				}
			>
				Open profile
			</h3>
			<h3
				className={cn(styles.option, styles.option_danger)}
				onClick={handleKick}
			>
				Kick from chat
			</h3>
			<h3
				className={styles.option}
				onClick={(e: MouseEvent<HTMLHeadingElement>) =>
					handleClose(e, setIsVisibleMenu)
				}
			>
				Close
			</h3>
		</div>
	)
}

export default UserInChatMenu
