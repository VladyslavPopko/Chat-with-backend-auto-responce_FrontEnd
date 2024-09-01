import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { UseFindUsers } from '../../../../api/user/UseFindUsers'
import { useAppSelector } from '../../../../store/store'
import { IFormSearch } from '../../../../types/form.types'
import { IUser } from '../../../../types/user.types'
import Input from '../../../ui/input/Input'
import styles from './MenuHeader.module.scss'
import ImgMenu from './img-menu/ImgMenu'
import MenuHeaderList from './menu-header-list/MenuHeaderList'
const MenuHeader = () => {
	const user: IUser | null = useAppSelector(state => state.auth.user)
	const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)
	const [isSearchValue, setIsSearchValue] = useState<boolean>(false)
	const [searchValue, setSearchValue] = useState<IUser[]>()
	const { mutate } = UseFindUsers()

	const { register, handleSubmit, watch } = useForm<IFormSearch>()

	const searchValueForm = watch('name')

	useEffect(() => {
		if (searchValueForm?.length) {
			mutate(
				{ name: searchValueForm },
				{
					onSuccess: responseData => {
						setIsSearchValue(true)
						setSearchValue(responseData)
					},
				}
			)
		} else {
			setIsSearchValue(false)
		}
	}, [searchValueForm])

	const onSubmit = () => {}

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
						src={user?.avatar || '/images/avatar.svg'}
						className={styles.img_avatar}
						draggable='false'
					/>
					{isVisibleMenu && <ImgMenu setIsVisibleMenu={setIsVisibleMenu} />}
				</div>
				{user ? (
					<p>{`Hello, ${user.name} ${user.surname}`} </p>
				) : (
					<NavLink to={'/auth'} className={styles.button} draggable={false}>
						Log In
					</NavLink>
				)}
			</div>

			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input<IFormSearch>
					required={true}
					register={register}
					registerName='name'
					name='name'
					placeholder='Search or start new chat'
					imgLeft='/images/search.svg'
				/>
				{isSearchValue && (
					<MenuHeaderList
						setIsSearchValue={setIsSearchValue}
						searchValue={searchValue}
					/>
				)}
			</form>
		</div>
	)
}

export default MenuHeader
