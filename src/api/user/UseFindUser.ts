import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API } from '../../constants/api'
import { IFindUser } from '../../types/api.types'
import { IUser } from '../../types/user.types'

const find = async (data: IFindUser) => {
	const response = await axios.post<IUser>(`${API}/user/find`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
	return response.data
}
export const UseFindUser = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['find-user'],
		mutationFn: find,
	})

	return { mutate, isError, isSuccess }
}
