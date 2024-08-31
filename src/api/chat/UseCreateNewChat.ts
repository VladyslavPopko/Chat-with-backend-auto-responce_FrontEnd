import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IChat } from '../../types/api.types'
import { IFormNewChat } from '../../types/form.types'

const create = async (data: IFormNewChat) => {
	const response = await axios.post<IChat>(`${API}/chat/create`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${Cookies.get('token')}`,
		},
	})
	return response.data
}
export const UseCreateNewChat = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['create-new-chat'],
		mutationFn: create,
	})

	return { mutate, isError, isSuccess }
}
