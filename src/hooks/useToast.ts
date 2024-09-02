import { useCallback, useState } from 'react'

export const useToast = () => {
	const [isToastActive, setIsToastActive] = useState<boolean>(false)

	const showToast = useCallback(() => {
		setIsToastActive(true)
	}, [])

	const hideToast = useCallback(() => {
		setIsToastActive(false)
	}, [])

	return {
		isToastActive,
		showToast,
		hideToast,
	}
}
