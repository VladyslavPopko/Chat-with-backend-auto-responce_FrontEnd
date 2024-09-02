import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { UseGetUserChats } from '../../../api/chat/UseGetUserChats'
import { UseUpdateChat } from '../../../api/chat/UseUpdateChat'
import { changeChats } from '../../../store/slices/chatsSlice'
import { AppDispatch, useAppSelector } from '../../../store/store'
import { IFormUpdateChat } from '../../../types/form.types'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'
import styles from './UpdateChat.module.scss'

const UpdateChat = () => {
	const userID = useAppSelector(state => state.auth.user?.id)
	const chatUsers = useAppSelector(chat => chat.chat.chat?.chatUsers)

	const chat = chatUsers?.filter(chat => chat.userId === userID)[0]
	const { mutate } = UseUpdateChat()
	const { mutate: mutateChats } = UseGetUserChats()

	const { register, handleSubmit } = useForm<IFormUpdateChat>({
		defaultValues: {
			name: chat?.displayedName || chat?.name,
			avatar: chat?.displayedAvatar || chat?.displayedAvatar,
		},
	})
	const dispatch: AppDispatch = useDispatch<AppDispatch>()

	const onSubmit = (data: IFormUpdateChat) => {
		if (chat) {
			let dataForm: IFormUpdateChat = { ...data }
			dataForm.id = chat.id
			mutate(dataForm, {
				onSuccess: () => {
					if (userID)
						mutateChats(userID, {
							onSuccess: responseData => {
								dispatch(changeChats(responseData.chatUsers))
							},
						})
				},
			})
		}
	}
	return (
		<div className={styles.section}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.title}>Name:</h2>
				<Input<IFormUpdateChat> register={register} registerName='name' />
				<h2 className={styles.title}>Avatar:</h2>
				<Input<IFormUpdateChat> register={register} registerName='avatar' />
				<Button type='submit' text='Update Chat' />
			</form>
		</div>
	)
}

export default UpdateChat
