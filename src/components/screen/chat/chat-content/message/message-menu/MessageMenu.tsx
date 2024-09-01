import cn from 'classnames'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import styles from './MessageMenu.module.scss'

const MessageMenu = ({
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
			<h3
				className={cn(styles.option, styles.option_warning)}
				onClick={handleClose}
			>
				Change
			</h3>
			<h3
				className={cn(styles.option, styles.option_delete)}
				onClick={handleClose}
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
