import { IMainLayout } from '../../types/layout.types'
import styles from './Layout.module.scss'
import MainLayout from './main/MainLayout'
import MenuLayout from './menu/MenuLayout'

const Layout = ({ children, text, image }: IMainLayout) => {
	return (
		<div className={styles.section}>
			<MenuLayout />
			<MainLayout text={text} image={image}>
				{children}
			</MainLayout>
		</div>
	)
}

export default Layout
