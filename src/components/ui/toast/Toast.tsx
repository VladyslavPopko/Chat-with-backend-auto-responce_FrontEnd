import cn from 'classnames'
import { useEffect } from 'react'
import styles from './Toast.module.scss'

const Toast = ({
	text,
	isActive,
	onHide,
}: {
	text: string
	isActive: boolean
	onHide: () => void
}) => {
	useEffect(() => {
		// Если Toast активен, установить таймер для его скрытия через 2 секунды
		if (isActive) {
			const timer = setTimeout(() => {
				onHide() // Вызов функции скрытия
			}, 2000)

			// Очистка таймера при изменении isActive или размонтировании компонента
			return () => clearTimeout(timer)
		}
	}, [isActive, onHide]) // Эффект зависит от isActive и onHide

	return (
		<div className={cn(styles.section, isActive && styles.active)}>{text}</div>
	)
}

export default Toast
