import cn from 'classnames'
import Cookies from 'js-cookie'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeIsAuth, changeUser } from '../../../../../store/slices/authSlice'
import { AppDispatch } from '../../../../../store/store'
import styles from './ImgMenu.module.scss'

const ImgMenu = ({
	setIsVisibleMenu,
}: {
	setIsVisibleMenu: Dispatch<SetStateAction<boolean>>
}) => {
	const dispatch: AppDispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const handleClose = (e: MouseEvent) => {
		e.stopPropagation()
		setIsVisibleMenu(false)
	}
	const handleAddNewChat = (e: MouseEvent) => {
		e.stopPropagation()
		setIsVisibleMenu(false)
		navigate('/new-chat')
	}
	const handleChangeInformation = (e: MouseEvent) => {
		e.stopPropagation()
		setIsVisibleMenu(false)
		navigate('/profile')
	}

	const handleLogout = (e: MouseEvent) => {
		e.stopPropagation()
		setIsVisibleMenu(false)
		navigate('/auth')
		dispatch(changeIsAuth(false))
		dispatch(changeUser(null))
		Cookies.remove('token')
	}
	return (
		<div className={styles.section}>
			<h3 className={cn(styles.option)} onClick={handleAddNewChat}>
				Add new chat
			</h3>
			<h3
				className={cn(styles.option, styles.option_warning)}
				onClick={handleChangeInformation}
			>
				Change information
			</h3>
			<h3
				className={cn(styles.option, styles.option_delete)}
				onClick={handleLogout}
			>
				Log out
			</h3>
			<h3 className={styles.option} onClick={handleClose}>
				Close
			</h3>
		</div>
	)
}

export default ImgMenu
