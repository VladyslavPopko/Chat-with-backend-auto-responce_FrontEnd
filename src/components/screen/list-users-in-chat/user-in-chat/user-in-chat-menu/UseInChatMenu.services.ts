import { Dispatch, MouseEvent, SetStateAction } from 'react'

export const handleClose = (
	e: MouseEvent<HTMLHeadingElement>,
	setIsVisibleMenu: Dispatch<SetStateAction<boolean>>
) => {
	e.stopPropagation()
	setIsVisibleMenu(false)
}
