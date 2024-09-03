import cn from 'classnames'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UseDeleteUserFromChat } from '../../../../../../../api/chat/UseDeleteUserFromChat'
import { UseGetUserChats } from '../../../../../../../api/chat/UseGetUserChats'
import { useToast } from '../../../../../../../context/ToastContext'
import { changeChat } from '../../../../../../../store/slices/chatSlice'
import { changeChats } from '../../../../../../../store/slices/chatsSlice'
import { AppDispatch, useAppSelector } from '../../../../../../../store/store'
import { IChatDetail, IChatUser } from '../../../../../../../types/api.types'
import styles from './ChatItemMenu.module.scss'

const ChatItemMenu = ({
	setIsVisibleMenu,
	chatInfo,
	chat,
	isVisibleMenu,
}: {
	isVisibleMenu: boolean
	chat: IChatUser
	setIsVisibleMenu: Dispatch<SetStateAction<boolean>>
	chatInfo: IChatDetail | undefined
}) => {
	const dispatch: AppDispatch = useDispatch<AppDispatch>()
	const { showToast } = useToast()
	const userID = useAppSelector(state => state.auth.user?.id)
	const { mutate } = UseDeleteUserFromChat()
	const { mutate: mutateChats } = UseGetUserChats()
	const navigate = useNavigate()
	const handleClose = (e: MouseEvent) => {
		e.stopPropagation()
		setIsVisibleMenu(false)
	}
	const handleListUsers = (e: MouseEvent) => {
		if (chatInfo) {
			e.stopPropagation()
			setIsVisibleMenu(false)
			dispatch(changeChat(chatInfo))
			navigate('/list-users-in-chat')
		}
	}

	const handleAddUser = (e: MouseEvent) => {
		if (chatInfo) {
			e.stopPropagation()
			setIsVisibleMenu(false)
			dispatch(changeChat(chatInfo))
			navigate('/add-user-to-chat')
		}
	}

	const leaveFromChat = (e: MouseEvent) => {
		e.stopPropagation()
		mutate(chat.id, {
			onSuccess: () => {
				if (userID)
					mutateChats(userID, {
						onSuccess: responseData => {
							dispatch(changeChats(responseData.chatUsers))
							setIsVisibleMenu(false)
							showToast('Leaved from chat')
						},
					})
			},
		})
	}

	const handleChangeChat = (e: MouseEvent) => {
		e.stopPropagation()
		navigate('/update-chat')
	}

	return (
		<div className={cn(styles.section, isVisibleMenu && styles.active)}>
			<h3
				className={cn(styles.option, styles.option_success)}
				onClick={handleAddUser}
			>
				Add User
			</h3>
			<h3
				className={cn(styles.option, styles.option_warning)}
				onClick={handleChangeChat}
			>
				Update Chat
			</h3>
			<h3 className={cn(styles.option)} onClick={handleListUsers}>
				List Users
			</h3>
			<h3
				className={cn(styles.option, styles.option_delete)}
				onClick={leaveFromChat}
			>
				Leave Chat
			</h3>
			<h3 className={styles.option} onClick={handleClose}>
				Close
			</h3>
		</div>
	)
}

export default ChatItemMenu
