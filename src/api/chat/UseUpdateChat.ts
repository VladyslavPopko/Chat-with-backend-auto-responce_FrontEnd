import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IChat } from '../../types/api.types'
import { IFormUpdateChat } from '../../types/form.types'

const update = async (data: IFormUpdateChat) => {
	const response = await axios.put<IChat>(`${API}/chat/updateChat`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${Cookies.get('token')}`,
		},
	})
	return response.data
}
export const UseUpdateChat = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['update-chat'],
		mutationFn: update,
	})

	return { mutate, isError, isSuccess }
}
