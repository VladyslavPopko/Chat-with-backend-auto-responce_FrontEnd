import { IErrorMessage } from '../../../types/ui.types'
import styles from './ErrorMessage.module.scss'

const ErrorMessage = ({ text }: IErrorMessage) => {
	return <div className={styles.message}>{text}</div>
}

export default ErrorMessage
