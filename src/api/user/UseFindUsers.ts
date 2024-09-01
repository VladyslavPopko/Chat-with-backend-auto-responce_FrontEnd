import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { API } from '../../constants/api'
import { IFindUsers } from '../../types/api.types'
import { IUser } from '../../types/user.types'

const find = async (data: IFindUsers) => {
	const response = await axios.post<IUser[]>(`${API}/user/findUsers`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
	return response.data
}
export const UseFindUsers = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['find-users'],
		mutationFn: find,
	})

	return { mutate, isError, isSuccess }
}
