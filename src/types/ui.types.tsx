import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

export interface IInput<T extends FieldValues = FieldValues> {
	autoFocus?: boolean
	type?: string
	classNameSection?: string
	classNameInput?: string
	name?: string
	placeholder?: string
	register?: UseFormRegister<T>
	registerName?: Path<T>
	pattern?: RegExp
	patternText?: string
	required?: boolean
	requiredText?: string
	imgLeft?: string
	imgRight?: string
	classNameImgLeft?: string
	classNameImgRight?: string
	onClickImgRight?: () => void
}

export interface IButton {
	text: string
	type?: string
	className?: string
	onClick?: () => void
}

export interface IErrorMessage {
	text: string
}
