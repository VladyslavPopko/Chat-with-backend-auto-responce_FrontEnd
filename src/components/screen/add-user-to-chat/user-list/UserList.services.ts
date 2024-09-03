import { Dispatch, SetStateAction } from 'react'

export const handleClose = (
	setIsSearchValue: Dispatch<SetStateAction<boolean>>
) => {
	setIsSearchValue(false)
}
