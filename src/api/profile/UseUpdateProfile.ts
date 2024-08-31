import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API } from '../../constants/api'
import { IUpdateProfile } from '../../types/api.types'
import { IUser } from '../../types/user.types'

const update = async (data: IUpdateProfile) => {
	const response = await axios.put<IUser>(`${API}/user/update`, data, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${Cookies.get('token')}`,
		},
	})
	return response.data
}
export const UseUpdateProfile = () => {
	const { mutate, isError, isSuccess } = useMutation({
		mutationKey: ['update-profile'],
		mutationFn: update,
	})

	return { mutate, isError, isSuccess }
}
