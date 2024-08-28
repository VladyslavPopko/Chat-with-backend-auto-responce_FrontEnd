import { NavigateFunction } from 'react-router-dom'

export const handleGoBack = (navigate: NavigateFunction) => {
	const { referrer } = document
	const currentDomain = window.location.origin

	if (referrer && referrer.startsWith(currentDomain)) {
		navigate(-1)
	} else {
		navigate('/')
	}
}
