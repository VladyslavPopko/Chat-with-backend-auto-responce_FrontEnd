import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IGetUserChats } from '../../types/api.types'

const get = async (id: string) => {
	const response = await axios.post<IGetUserChats>(
		`${API}/user/chats`,
		{ id },
		{
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${Cookies.get('token')}`,
			},
		}
	)
	return response.data
}
export const UseGetUserChats = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['get-user-chats'],
		mutationFn: get,
	})

	return { mutate, isError, isSuccess }
}
