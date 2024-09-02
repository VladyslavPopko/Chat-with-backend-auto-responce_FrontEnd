import cn from 'classnames'
import { useState } from 'react'
import MenuBody from './menu-body/MenuBody'
import MenuHeader from './menu-header/MenuHeader'
import styles from './MenuLayout.module.scss'

const MenuLayout = () => {
	const [isActive, setIsActive] = useState<boolean>(false)
	return (
		<div
			className={cn(styles.section, isActive && styles.active)}
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
		>
			<MenuHeader />
			<MenuBody />
		</div>
	)
}

export default MenuLayout
