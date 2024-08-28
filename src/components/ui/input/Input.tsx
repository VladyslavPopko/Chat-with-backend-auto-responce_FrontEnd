import cn from 'classnames'
import { IInput } from '../../../types/ui.types'
import styles from './Input.module.scss'

const Input = (input: IInput) => {
	return (
		<label
			htmlFor={input.name}
			className={cn(styles.section, input.classNameSection)}
		>
			{input.img && (
				<img className={styles.img} src={input.img} draggable='false' />
			)}
			<input
				placeholder={input.placeholder}
				className={cn(styles.input, input.classNameInput)}
				id={input.name}
			/>
		</label>
	)
}

export default Input
