import { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import MainBody from './main-body/MainBody'
import MainHeader from './main-header/MainHeader'

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className={styles.section}>
			<MainHeader />
			<MainBody>{children}</MainBody>
		</div>
	)
}

export default Layout
