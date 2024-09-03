import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { UseLogin } from '../../../api/auth/UseLogin'
import { useToast } from '../../../context/ToastContext'
import { AppDispatch } from '../../../store/store'
import { IFormAuth } from '../../../types/form.types'
import Button from '../../ui/button/Button'
import ErrorMessage from '../../ui/error-message/ErorrMessage'
import Input from '../../ui/input/Input'
import styles from './Auth.module.scss'
import { onSubmit } from './Auth.services'

const Auth = () => {
	const { register, handleSubmit, formState } = useForm<IFormAuth>({
		mode: 'onChange',
	})

	const { showToast } = useToast()
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const { mutate } = UseLogin()

	return (
		<>
			<form
				className={styles.form}
				onSubmit={handleSubmit(data =>
					onSubmit(data, dispatch, mutate, navigate, showToast)
				)}
			>
				<Input<IFormAuth>
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
				<Input<IFormAuth>
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
			<NavLink
				draggable={false}
				to='/register'
				className={styles.button_signup}
			>
				Sign up
			</NavLink>
		</>
	)
}

export default Auth
