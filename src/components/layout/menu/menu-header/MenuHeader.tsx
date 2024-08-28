import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { IFormSearch } from '../../../../types/form.types'
import Input from '../../../ui/input/Input'
import styles from './MenuHeader.module.scss'
const MenuHeader = () => {
	const { register, handleSubmit } = useForm<IFormSearch>()
	const navigate = useNavigate()

	const onSubmit = (data: IFormSearch) => {
		console.log(data)
	}
	const goOnProfilePage = () => {
		navigate('/profile')
	}

	return (
		<div className={styles.section}>
			<div className={styles.header}>
				<img
					onClick={goOnProfilePage}
					src='/images/avatar.svg'
					className={styles.img_avatar}
					draggable='false'
				/>

				<NavLink to={'/auth'} className={styles.button}>
					Log In
				</NavLink>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input<IFormSearch>
					required={true}
					register={register}
					registerName='searchValue'
					name='search'
					placeholder='Search or start new chat'
					imgLeft='/images/search.svg'
				/>
			</form>
		</div>
	)
}

export default MenuHeader
