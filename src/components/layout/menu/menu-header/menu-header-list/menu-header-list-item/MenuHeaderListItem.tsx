import { IUser } from '../../../../../../types/user.types'
import styles from './MenuHeaderListItem.module.scss'

const MenuHeaderListItem = ({ user }: { user: IUser }) => {
	return (
		<div className={styles.section}>
			<img
				src={user?.avatar ? user.avatar : '/images/avatar.svg'}
				className={styles.img}
				draggable={false}
			/>
			<h3 className={styles.text}>
				{user.name} {user.surname}
			</h3>
		</div>
	)
}

export default MenuHeaderListItem
