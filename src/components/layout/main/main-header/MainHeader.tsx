import { useAppSelector } from '../../../../store/store'
import { IMainHeader } from '../../../../types/layout.types'
import styles from './MainHeader.module.scss'

const MainHeader = (info: IMainHeader) => {
	const chatAvatar = useAppSelector(state => state.chat.chat?.avatar)
	return (
		<div className={styles.section}>
			<img
				src={chatAvatar ? chatAvatar : '/images/avatar.svg'}
				className={styles.img}
			/>
			<h2>{info.text}</h2>
		</div>
	)
}

export default MainHeader
