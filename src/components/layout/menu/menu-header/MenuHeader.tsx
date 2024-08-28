import { NavLink } from 'react-router-dom'
import Input from '../../../ui/input/Input'
import styles from './MenuHeader.module.scss'
const MenuHeader = () => {
	return (
		<div className={styles.section}>
			<div className={styles.header}>
				<img
					src='/images/avatar.svg'
					className={styles.img_avatar}
					draggable='false'
				/>

				<NavLink to={'/auth'} className={styles.button}>
					Log In
				</NavLink>
			</div>
			<Input
				name='search'
				placeholder='Search or start new chat'
				img='/images/search.svg'
			/>
		</div>
	)
}

export default MenuHeader
