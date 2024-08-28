import cn from 'classnames'
import { IButton } from '../../../types/ui.types'
import styles from './Button.module.scss'

const Button = (button: IButton) => {
	return (
		<button
			onClick={button.onClick}
			className={cn(styles.button, button.className)}
		>
			{button.text}
		</button>
	)
}

export default Button
