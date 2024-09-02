import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UseAddUsersToChat } from '../../../api/chat/UseAddUsersToChat'
import { UserCreatePrivateChat } from '../../../api/chat/UseCreatePrivateChat'
import { UseGetChatinfo } from '../../../api/chat/UseGetChatInfo'
import { UseFindUsers } from '../../../api/user/UseFindUsers'
import { changeChat } from '../../../store/slices/chatSlice'
import { AppDispatch, useAppSelector } from '../../../store/store'
import { IAddUserToChat } from '../../../types/api.types'
import { IFormSearch } from '../../../types/form.types'
import { IUser } from '../../../types/user.types'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'
import styles from './AddUserToChat.module.scss'
import UserList from './user-list/UserList'

const AddUserToChat = () => {
	const [isSearchValue, setIsSearchValue] = useState<boolean>(false)
	const [searchValue, setSearchValue] = useState<IUser[]>()
	const { mutate } = UseFindUsers()
	const chatID = useAppSelector(state => state.chat.chat?.id)
	const userID = useAppSelector(state => state.auth.user?.id)
	const navigate = useNavigate()

	const { register, handleSubmit, watch } = useForm<IFormSearch>()
	const [users, setUsers] = useState<IUser[]>()

	const searchValueForm = watch('name')

	useEffect(() => {
		if (searchValueForm?.length) {
			mutate(
				{ name: searchValueForm },
				{
					onSuccess: responseData => {
						setIsSearchValue(true)
						setSearchValue(responseData)
					},
				}
			)
		} else {
			setIsSearchValue(false)
		}
	}, [searchValueForm])

	const onSubmit = () => {}

	const { mutate: mutateAddUsers } = UseAddUsersToChat()
	const { mutate: mutateChat } = UseGetChatinfo()
	const { mutate: mutateCreateChat } = UserCreatePrivateChat()
	const dispatch: AppDispatch = useDispatch<AppDispatch>()

	const addtoChat = () => {
		if (!chatID) {
			if (users)
				mutateCreateChat(
					{
						name: 'Private chat',
						users: [
							{
								userId: users[0].id,
								name: `${users[0].name} ${users[0].surname}`,
								avatar: users[0].avatar,
							},
							{
								userId: users[1].id,
								name: `${users[1].name} ${users[1].surname}`,
								avatar: users[1].avatar,
							},
						],
					},
					{
						onSuccess: responseData => {
							mutateChat(
								{ id: responseData.id },
								{
									onSuccess: responseData => {
										dispatch(changeChat(responseData))
										navigate('/chat')
									},
								}
							)
						},
					}
				)
		} else {
			if (users) {
				const usersIDs = users.map(user => user.id)

				const data: IAddUserToChat = {
					chatId: chatID,
					users: usersIDs,
				}
				mutateAddUsers(data, {
					onSuccess: () => {
						if (userID) {
							mutateChat(
								{ id: chatID },
								{
									onSuccess: responseData => {
										dispatch(changeChat(responseData))
										navigate('/chat')
									},
								}
							)
						}
					},
				})
			}
		}
	}

	return (
		<div className={styles.section}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input<IFormSearch>
					required={true}
					register={register}
					registerName='name'
					name='name'
					placeholder='Search users'
					imgLeft='/images/search.svg'
				/>
				{isSearchValue && (
					<UserList
						setUsers={setUsers}
						users={users}
						setIsSearchValue={setIsSearchValue}
						searchValue={searchValue}
					/>
				)}
			</form>
			<div className={styles.section_list}>
				{users?.map(user => (
					<div className={styles.profile} key={user.id}>
						<img
							src={user?.avatar ? user.avatar : '/images/avatar.svg'}
							draggable={false}
							className={styles.img}
						/>
						<h3>
							{user.name} {user.surname}
						</h3>
					</div>
				))}
			</div>
			<Button text='Add to chat' onClick={addtoChat} />
		</div>
	)
}

export default AddUserToChat
