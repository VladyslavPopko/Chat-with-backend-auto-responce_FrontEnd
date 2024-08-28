import { useNavigate } from 'react-router-dom'
import { handleGoBack } from '../../../utils/handleGoBack'
import styles from './NotFound.module.scss'

const NotFound = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.section}>
			<button onClick={() => handleGoBack(navigate)}>Go back</button>
			<h1 className={styles.title}>404 Page </h1>
		</div>
	)
}

export default NotFound
