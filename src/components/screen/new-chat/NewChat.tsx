import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { UseAddUsersToChat } from '../../../api/chat/UseAddUsersToChat'
import { UseCreateNewChat } from '../../../api/chat/UseCreateNewChat'
import { UseGetUserChats } from '../../../api/chat/UseGetUserChats'
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
	const { register, handleSubmit, formState } = useForm<IFormNewChat>({
		mode: 'onChange',
	})

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
			},
		})
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
		</>
	)
}

export default NewChat
