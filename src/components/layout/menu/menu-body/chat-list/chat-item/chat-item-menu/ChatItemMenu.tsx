import cn from 'classnames'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ChatItemMenu.module.scss'

const ChatItemMenu = ({
	setIsVisibleMenu,
}: {
	setIsVisibleMenu: Dispatch<SetStateAction<boolean>>
}) => {
	const navigate = useNavigate()
	const handleClose = (e: MouseEvent) => {
		e.stopPropagation()
		setIsVisibleMenu(false)
	}
	const handleListUsers = (e: MouseEvent) => {
		e.stopPropagation()
		setIsVisibleMenu(false)
		navigate('/list-users-in-chat')
	}
	return (
		<div className={styles.section}>
			<h3
				className={cn(styles.option, styles.option_success)}
				onClick={handleClose}
			>
				Add User
			</h3>
			<h3 className={cn(styles.option)} onClick={handleListUsers}>
				List Users
			</h3>
			<h3
				className={cn(styles.option, styles.option_delete)}
				onClick={handleClose}
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
