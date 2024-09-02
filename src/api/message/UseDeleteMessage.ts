import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IMessage } from '../../types/api.types'

const remove = async (id: string) => {
	const response = await axios.delete<IMessage>(`${API}/message/delete`, {
		data: { id },
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${Cookies.get('token')}`,
		},
	})
	return response.data
}

export const USeDeleteMessage = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['delete-message-from-chat'],
		mutationFn: remove,
	})

	return { mutate, isError, isSuccess }
}
