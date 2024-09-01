import { Dispatch, SetStateAction } from 'react'
import { IUser } from '../../../../../types/user.types'
import styles from './MenuHeaderList.module.scss'
import MenuHeaderListItem from './menu-header-list-item/MenuHeaderListItem'

const MenuHeaderList = ({
	setIsSearchValue,
	searchValue,
}: {
	setIsSearchValue: Dispatch<SetStateAction<boolean>>
	searchValue: IUser[] | undefined
}) => {
	const handleClose = () => {
		setIsSearchValue(false)
	}

	return (
		<div className={styles.section} onClick={handleClose}>
			{searchValue?.length ? (
				searchValue?.map(user => <MenuHeaderListItem user={user} />)
			) : (
				<p className={styles.text}>No such name user</p>
			)}
		</div>
	)
}

export default MenuHeaderList
