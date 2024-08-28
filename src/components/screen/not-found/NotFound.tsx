import { useNavigate } from 'react-router-dom'
import { handleGoBack } from '../../../utils/handleGoBack'
import Button from '../../ui/button/Button'
import styles from './NotFound.module.scss'

const NotFound = () => {
	const navigate = useNavigate()

	const goBack = () => {
		handleGoBack(navigate)
	}
	return (
		<div className={styles.section}>
			<Button onClick={goBack} text='Go back' />
			<h1 className={styles.title}>404 Page </h1>
		</div>
	)
}

export default NotFound
