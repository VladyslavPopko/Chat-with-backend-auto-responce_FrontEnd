import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IMessage, ISendMessage } from '../../types/api.types'

const send = async (data: ISendMessage) => {
	const response = await axios.post<IMessage>(`${API}/message/create`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${Cookies.get('token')}`,
		},
	})
	return response.data
}
export const UseSendMessage = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['send-message'],
		mutationFn: send,
	})

	return { mutate, isError, isSuccess }
}
