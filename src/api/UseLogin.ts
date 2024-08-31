import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API } from '../constants/api'
import { ILogin } from './../types/api.types'

const login = async (data: ILogin) => {
	const response = await axios.post(`${API}/login`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
	return response
}
export const UseLogin = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['login'],
		mutationFn: login,
	})

	return { mutate, isError, isSuccess }
}
