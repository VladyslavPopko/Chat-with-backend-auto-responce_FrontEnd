import { UseMutateFunction } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { changeIsAuth, changeUser } from '../../../store/slices/authSlice'
import { AppDispatch } from '../../../store/store'
import { ILogin } from '../../../types/api.types'
import { IFormAuth } from '../../../types/form.types'
import { IRegisterUser } from '../../../types/user.types'

export const onSubmit = (
	data: IFormAuth,
	dispatch: AppDispatch,
	mutate: UseMutateFunction<
		AxiosResponse<IRegisterUser, any>,
		Error,
		ILogin,
		unknown
	>,
	navigate: ReturnType<typeof useNavigate>,
	showToast: (text: string) => void
) => {
	mutate(data, {
		onSuccess: responseData => {
			Cookies.set('token', responseData.data.token)
			dispatch(changeIsAuth(true))
			dispatch(changeUser(responseData.data.user))
			showToast(`Hello, ${responseData.data.user.name}`)
			navigate('/')
		},
	})
}
