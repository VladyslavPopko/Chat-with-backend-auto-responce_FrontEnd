import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IAddUserToChat } from '../../types/api.types'

const add = async (data: IAddUserToChat) => {
	const response = await axios.put(`${API}/chat/addUsersToChat`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${Cookies.get('token')}`,
		},
	})
	return response.data
}
export const UseAddUsersToChat = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['add-users-to-chat'],
		mutationFn: add,
	})

	return { mutate, isError, isSuccess }
}
