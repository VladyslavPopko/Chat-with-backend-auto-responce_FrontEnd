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
	img?: string
}

export interface IButton {
	text: string
	type?: string
	className?: string
}

export interface IErrorMessage {
	text: string
}
