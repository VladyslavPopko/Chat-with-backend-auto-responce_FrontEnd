import MenuBody from './menu-body/MenuBody'
import MenuHeader from './menu-header/MenuHeader'
import styles from './MenuLayout.module.scss'

const MenuLayout = () => {
	return (
		<div className={styles.section}>
			<MenuHeader />
			<MenuBody />
		</div>
	)
}

export default MenuLayout
