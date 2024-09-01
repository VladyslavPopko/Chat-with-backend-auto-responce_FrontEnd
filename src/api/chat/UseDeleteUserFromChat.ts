import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IChatUser } from '../../types/api.types'

const remove = async (id: string) => {
	const response = await axios.delete<IChatUser>(
		`${API}/chat/removeUserFromChat`,
		{
			data: { id },
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${Cookies.get('token')}`,
			},
		}
	)
	return response.data
}

export const UseDeleteUserFromChat = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['delete-from-chat'],
		mutationFn: remove,
	})

	return { mutate, isError, isSuccess }
}
