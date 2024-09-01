import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IMessage } from '../../types/api.types'

const find = async (id: string) => {
	const response = await axios.post<IMessage>(
		`${API}/message/find`,
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
export const UseFindMessage = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['find-message'],
		mutationFn: find,
	})

	return { mutate, isError, isSuccess }
}
