import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { UseLogin } from '../../../api/auth/UseLogin'
import { changeIsAuth, changeUser } from '../../../store/slices/authSlice'
import { AppDispatch } from '../../../store/store'
import { IFormAuth } from '../../../types/form.types'
import Button from '../../ui/button/Button'
import ErrorMessage from '../../ui/error-message/ErorrMessage'
import Input from '../../ui/input/Input'
import styles from './Auth.module.scss'

const Auth = () => {
	const dispatch: AppDispatch = useDispatch<AppDispatch>()
	const { mutate } = UseLogin()
	const { register, handleSubmit, formState } = useForm<IFormAuth>({
		mode: 'onChange',
	})

	const onSubmit = (data: IFormAuth) => {
		mutate(data, {
			onSuccess: responseData => {
				Cookies.set('token', responseData.data.token)
				dispatch(changeIsAuth(true))
				dispatch(changeUser(responseData.data.user))
			},
		})
	}

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
			<NavLink to='/register' className={styles.button_signup}>
				Sign up
			</NavLink>
		</>
	)
}

export default Auth
