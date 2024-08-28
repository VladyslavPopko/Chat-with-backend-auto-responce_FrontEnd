import { IMainLayout } from '../../../types/layout.types'
import MainHeader from './main-header/MainHeader'
import styles from './MainLayout.module.scss'

const MainLayout = ({ children, text, image }: IMainLayout) => {
	return (
		<div className={styles.section}>
			<MainHeader text={text} image={image} />
			<main className={styles.main}>{children}</main>
		</div>
	)
}

export default MainLayout
