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
		if (isActive) {
			const timer = setTimeout(() => {
				onHide()
			}, 2000)

			return () => clearTimeout(timer)
		}
	}, [isActive, onHide])

	return (
		<div className={cn(styles.section, isActive && styles.active)}>{text}</div>
	)
}

export default Toast
