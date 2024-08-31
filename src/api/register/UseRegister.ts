import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API } from '../../constants/api'
import { IRegister } from '../../types/api.types'
import { IRegisterUser } from '../../types/user.types'

const register = async (data: IRegister) => {
	const response = await axios.post<IRegisterUser>(`${API}/register`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
	return response.data
}
export const UseRegister = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['register'],
		mutationFn: register,
	})

	return { mutate, isError, isSuccess }
}
