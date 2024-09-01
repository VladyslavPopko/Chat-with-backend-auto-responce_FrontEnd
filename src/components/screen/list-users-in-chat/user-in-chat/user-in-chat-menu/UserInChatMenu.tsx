import cn from 'classnames'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import styles from './UsersInChatMenu.module.scss'

const UserInChatMenu = ({
	setIsVisibleMenu,
}: {
	setIsVisibleMenu: Dispatch<SetStateAction<boolean>>
}) => {
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
				onClick={handleClose}
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
