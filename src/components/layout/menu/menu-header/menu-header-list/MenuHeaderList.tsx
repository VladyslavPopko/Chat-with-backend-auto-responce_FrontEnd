import { Dispatch, SetStateAction } from 'react'
import { UseFormReset } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { IChat } from '../../../../../types/api.types'
import { IFormSearch } from '../../../../../types/form.types'
import styles from './MenuHeaderList.module.scss'
import MenuHeaderListItem from './menu-header-list-item/MenuHeaderListItem'

const MenuHeaderList = ({
	setIsSearchValue,
	searchValue,
	reset,
}: {
	reset: UseFormReset<IFormSearch>
	setIsSearchValue: Dispatch<SetStateAction<boolean>>
	searchValue: IChat[] | undefined
}) => {
	const handleClose = () => {
		setIsSearchValue(false)
	}

	return (
		<div className={styles.section} onClick={handleClose}>
			{searchValue?.length ? (
				searchValue?.map(chat => (
					<MenuHeaderListItem
						chat={chat}
						setIsSearchValue={setIsSearchValue}
						reset={reset}
					/>
				))
			) : (
				<div className={styles.content}>
					<p className={styles.text}>No such chat</p>
					<NavLink to='/new-chat' draggable={false} className={styles.link}>
						Create new
					</NavLink>
				</div>
			)}
		</div>
	)
}

export default MenuHeaderList
