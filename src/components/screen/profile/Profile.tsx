import { useForm } from 'react-hook-form'
import { IFormProfile } from '../../../types/form.types'
import Button from '../../ui/button/Button'
import ErrorMessage from '../../ui/error-message/ErorrMessage'
import Input from '../../ui/input/Input'
import styles from './Profile.module.scss'

const Profile = () => {
	const { register, formState, handleSubmit } = useForm<IFormProfile>({
		mode: 'onChange',
	})

	const onSubmit = (data: IFormProfile) => {
		console.log(data)
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.form_item}>
				<h2 className={styles.title}>Name:</h2>
				<Input<IFormProfile>
					placeholder='Enter name'
					register={register}
					registerName='name'
					type='text'
					required={true}
				/>
				{formState.errors.name?.message && (
					<ErrorMessage text={formState.errors.name.message} />
				)}
			</div>
			<div className={styles.form_item}>
				<h2 className={styles.title}>Surname:</h2>
				<Input<IFormProfile>
					placeholder='Enter surname'
					register={register}
					registerName='surname'
					type='text'
					required={true}
				/>
				{formState.errors.surname?.message && (
					<ErrorMessage text={formState.errors.surname.message} />
				)}
			</div>
			<div className={styles.form_item}>
				<h2 className={styles.title}>Email:</h2>
				<Input<IFormProfile>
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
			</div>
			<Button type='submit' text='Update Profile' className={styles.button} />
		</form>
	)
}

export default Profile
