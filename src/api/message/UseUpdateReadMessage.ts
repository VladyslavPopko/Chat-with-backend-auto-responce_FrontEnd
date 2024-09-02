import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IMessage, IUpdateMessageIsRead } from '../../types/api.types'

const update = async (data: IUpdateMessageIsRead) => {
	const response = await axios.put<IMessage>(
		`${API}/message/updateIsRead`,
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
export const UseUpdateReadMessage = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['update-read-message'],
		mutationFn: update,
	})

	return { mutate, isError, isSuccess }
}
