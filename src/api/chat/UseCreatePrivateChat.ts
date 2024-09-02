import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IChat } from '../../types/api.types'
import { IFormPrivateChat } from '../../types/form.types'

const create = async (data: IFormPrivateChat) => {
	const response = await axios.post<IChat>(
		`${API}/chat/createPrivatechat`,
		data,
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
export const UserCreatePrivateChat = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['create-private-chat'],
		mutationFn: create,
	})

	return { mutate, isError, isSuccess }
}
