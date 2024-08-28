import { IMainHeader } from '../../../../types/layout.types'
import styles from './MainHeader.module.scss'

const MainHeader = (info: IMainHeader) => {
	return <div className={styles.section}>{info.text}</div>
}

export default MainHeader
