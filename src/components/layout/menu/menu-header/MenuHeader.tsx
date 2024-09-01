import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../../store/store'
import { IFormSearch } from '../../../../types/form.types'
import { IUser } from '../../../../types/user.types'
import Input from '../../../ui/input/Input'
import styles from './MenuHeader.module.scss'
import ImgMenu from './img-menu/ImgMenu'
const MenuHeader = () => {
	const user: IUser | null = useAppSelector(state => state.auth.user)
	const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)

	const { register, handleSubmit } = useForm<IFormSearch>()

	const onSubmit = (data: IFormSearch) => {
		console.log(data)
	}

	const handleCloseMenu = () => {
		setIsVisibleMenu(!isVisibleMenu)
	}

	return (
		<div className={styles.section}>
			<div className={styles.header}>
				<div
					className={styles.section_img_avatar}
					onContextMenu={handleCloseMenu}
					onClick={handleCloseMenu}
				>
					<img
						src='/images/avatar.svg'
						className={styles.img_avatar}
						draggable='false'
					/>
					{isVisibleMenu && <ImgMenu setIsVisibleMenu={setIsVisibleMenu} />}
				</div>
				{user ? (
					<p>{`Hello, ${user.name} ${user.surname}`} </p>
				) : (
					<NavLink to={'/auth'} className={styles.button}>
						Log In
					</NavLink>
				)}
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
