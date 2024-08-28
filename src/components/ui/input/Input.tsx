import cn from 'classnames'
import { FieldValues } from 'react-hook-form'
import { IInput } from '../../../types/ui.types'
import styles from './Input.module.scss'

const Input = <T extends FieldValues>(input: IInput<T>) => {
	return (
		<label
			htmlFor={input.name}
			className={cn(styles.section, input.classNameSection)}
		>
			{input.imgLeft && (
				<img
					className={cn(styles.img, input.classNameImgLeft)}
					src={input.imgLeft}
					draggable='false'
				/>
			)}
			<input
				autoFocus={input.autoFocus}
				type={input.type}
				id={input.name}
				placeholder={input.placeholder}
				className={cn(styles.input, input.classNameInput)}
				{...(input.register && input.registerName
					? input.register(input.registerName, {
							required:
								input.required && input.requiredText
									? input.requiredText
									: 'This field is required',
							pattern:
								input.pattern && input.patternText
									? { value: input.pattern, message: input.patternText }
									: undefined,
					  })
					: {})}
			/>
			{input.imgRight && (
				<img
					onClick={input.onClickImgRight}
					className={cn(styles.img, input.classNameImgRight)}
					src={input.imgRight}
					draggable='false'
				/>
			)}
		</label>
	)
}

export default Input
