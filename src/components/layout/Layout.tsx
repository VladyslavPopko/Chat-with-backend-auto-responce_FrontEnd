import { useToast } from '../../context/ToastContext'
import { IMainLayout } from '../../types/layout.types'
import Toast from '../ui/toast/Toast'
import styles from './Layout.module.scss'
import MainLayout from './main/MainLayout'
import MenuLayout from './menu/MenuLayout'

const Layout = ({ children, text, image }: IMainLayout) => {
	const { isToastActive, toastText, hideToast } = useToast()

	return (
		<div className={styles.section}>
			<MenuLayout />
			<MainLayout text={text} image={image}>
				{children}
			</MainLayout>
			<Toast text={toastText} isActive={isToastActive} onHide={hideToast} />
		</div>
	)
}

export default Layout
