import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IChatDetail, IGetChatInfo } from '../../types/api.types'

const get = async (data: IGetChatInfo) => {
	const response = await axios.post<IChatDetail>(`${API}/chat`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${Cookies.get('token')}`,
		},
	})
	return response.data
}
export const UseGetChatinfo = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['get-info-chat'],
		mutationFn: get,
	})

	return { mutate, isError, isSuccess }
}
