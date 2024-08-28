import { ReactNode } from 'react'
import styles from './MainBody.module.scss'
const MainBody = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.section}>
			<h2 className={styles.title}>Chats</h2>
			{children}
		</div>
	)
}

export default MainBody
