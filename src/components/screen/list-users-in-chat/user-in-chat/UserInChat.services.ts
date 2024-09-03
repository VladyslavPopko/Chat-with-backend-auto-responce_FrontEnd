import { Dispatch, SetStateAction } from 'react'

export const handleMenu = (
	isVisibleMenu: boolean,
	setIsVisibleMenu: Dispatch<SetStateAction<boolean>>
) => {
	setIsVisibleMenu(!isVisibleMenu)
}
