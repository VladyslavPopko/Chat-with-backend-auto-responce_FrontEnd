import { useAppSelector } from '../../../../store/store'
import { IMainHeader } from '../../../../types/layout.types'
import styles from './MainHeader.module.scss'

const MainHeader = (info: IMainHeader) => {
	const chatAvatar = useAppSelector(state => state.chat.chat?.avatar)
	const chat = useAppSelector(state => state.chat.chat)
	const userID = useAppSelector(state => state.auth.user?.id)

	const displayed = chat?.chatUsers.filter(chat => chat.userId === userID)[0]

	return (
		<div className={styles.section}>
			<img
				src={
					displayed?.displayedAvatar
						? displayed?.displayedAvatar
						: chatAvatar
						? chatAvatar
						: '/images/avatar.svg'
				}
				className={styles.img}
			/>
			<h2>{displayed?.displayedName ? displayed?.displayedName : info.text}</h2>
		</div>
	)
}

export default MainHeader
