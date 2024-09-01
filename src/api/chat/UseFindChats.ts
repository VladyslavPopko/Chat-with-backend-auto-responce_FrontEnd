import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IChat, IFindChats } from '../../types/api.types'

const get = async (data: IFindChats) => {
	const response = await axios.post<IChat[]>(`${API}/chat/find`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${Cookies.get('token')}`,
		},
	})
	return response.data
}
export const UseFindChats = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['get-info-chat'],
		mutationFn: get,
	})

	return { mutate, isError, isSuccess }
}
