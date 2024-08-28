import { useForm } from 'react-hook-form'
import { IFormAuth } from '../../../types/form.types'
import Button from '../../ui/button/Button'
import ErrorMessage from '../../ui/error-message/ErorrMessage'
import Input from '../../ui/input/Input'
import styles from './Auth.module.scss'

const Auth = () => {
	const { register, handleSubmit, formState } = useForm<IFormAuth>({
		mode: 'onChange',
	})

	const onSubmit = (data: IFormAuth) => {
		console.log(data)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Input
				type='text'
				register={register}
				registerName='email'
				placeholder='Enter email'
				name='email'
				pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
				patternText='Check the email you entered. Example: "email@gmail.com"'
				required={true}
			/>
			{formState.errors.email?.message && (
				<ErrorMessage text={formState.errors.email.message} />
			)}
			<Input
				type='password'
				register={register}
				registerName='password'
				placeholder='Enter password'
				name='password'
				required={true}
			/>
			{formState.errors.password?.message && (
				<ErrorMessage text={formState.errors.password.message} />
			)}
			<Button className={styles.button} type='submit' text='Login' />
		</form>
	)
}

export default Auth
