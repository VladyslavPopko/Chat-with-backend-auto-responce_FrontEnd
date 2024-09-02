import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { UseAddUsersToChat } from '../../../api/chat/UseAddUsersToChat'
import { UseCreateNewChat } from '../../../api/chat/UseCreateNewChat'
import { UseGetChatinfo } from '../../../api/chat/UseGetChatInfo'
import { UseGetUserChats } from '../../../api/chat/UseGetUserChats'
import { useToast } from '../../../context/ToastContext'
import { changeChat } from '../../../store/slices/chatSlice'
import { changeChats } from '../../../store/slices/chatsSlice'
import { AppDispatch, useAppSelector } from '../../../store/store'
import { IFormNewChat } from '../../../types/form.types'
import { IUser } from '../../../types/user.types'
import Button from '../../ui/button/Button'
import ErrorMessage from '../../ui/error-message/ErorrMessage'
import Input from '../../ui/input/Input'
import styles from './NewChat.module.scss'

const NewChat = () => {
	const dispatch: AppDispatch = useDispatch<AppDispatch>()
	const user: IUser | null = useAppSelector(state => state.auth.user)
	const { mutate } = UseCreateNewChat()
	const { mutate: mutateAddToChat } = UseAddUsersToChat()
	const { mutate: mutateChats } = UseGetUserChats()
	const { mutate: mutateChat } = UseGetChatinfo()
	const navigate = useNavigate()
	const { register, handleSubmit, formState } = useForm<IFormNewChat>({
		mode: 'onChange',
	})
	const { showToast } = useToast()

	const onSubmit = (data: IFormNewChat) => {
		mutate(data, {
			onSuccess: responseData => {
				if (user) mutateAddToChat({ chatId: responseData.id, users: [user.id] })
				if (user) {
					mutateChats(user.id, {
						onSuccess: responseData => {
							dispatch(changeChats(responseData.chatUsers))
						},
					})
				}
				mutateChat(
					{ id: responseData.id },
					{
						onSuccess: responseData => {
							dispatch(changeChat(responseData))
							navigate('/add-user-to-chat')
							showToast('Chat created')
						},
					}
				)
			},
		})
	}

	const onLink = () => {
		dispatch(changeChat(null))
	}

	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input<IFormNewChat>
					type='text'
					register={register}
					registerName='name'
					placeholder='Enter name'
					name='name'
					required={true}
				/>
				{formState.errors.name?.message && (
					<ErrorMessage text={formState.errors.name.message} />
				)}
				<Button
					className={styles.button}
					type='submit'
					text='Create New Chat'
				/>
			</form>
			<NavLink onClick={onLink} className={styles.link} to='/add-user-to-chat'>
				Create private chat
			</NavLink>
		</>
	)
}

export default NewChat
