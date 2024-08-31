import { useForm } from 'react-hook-form'
import { UseLogin } from '../../../api/UseLogin'
import { IFormRegister } from '../../../types/form.types'
import Button from '../../ui/button/Button'
import ErrorMessage from '../../ui/error-message/ErorrMessage'
import Input from '../../ui/input/Input'
import styles from './Register.module.scss'

const Register = () => {
	const { mutate } = UseLogin()
	const { register, handleSubmit, formState } = useForm<IFormRegister>({
		mode: 'onChange',
	})

	const onSubmit = (data: IFormRegister) => {
		console.log(data)
		mutate(data, {
			onSuccess: () => {
				console.log('yes')
			},
		})
	}

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input<IFormRegister>
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
				<Input<IFormRegister>
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
				<Input<IFormRegister>
					type='name'
					register={register}
					registerName='name'
					placeholder='Enter name'
					name='name'
					required={true}
				/>
				{formState.errors.name?.message && (
					<ErrorMessage text={formState.errors.name.message} />
				)}
				<Input<IFormRegister>
					type='surname'
					register={register}
					registerName='surname'
					placeholder='Enter surname'
					name='surname'
					required={true}
				/>
				{formState.errors.surname?.message && (
					<ErrorMessage text={formState.errors.surname.message} />
				)}
				<Button className={styles.button} type='submit' text='Login' />
			</form>
		</>
	)
}

export default Register
