import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { UseGetChatinfo } from '../../../../api/chat/UseGetChatInfo'
import { UseSendMessage } from '../../../../api/chat/UseSendMessage'
import { changeChat } from '../../../../store/slices/chatSlice'
import { AppDispatch, useAppSelector } from '../../../../store/store'
import { ISendMessage } from '../../../../types/api.types'
import { IFormMessage } from '../../../../types/form.types'
import Input from '../../../ui/input/Input'
import styles from './ChatFooter.module.scss'

const ChatFooter = () => {
	const { register, handleSubmit, reset } = useForm<IFormMessage>()
	const user = useAppSelector(state => state.auth.user)
	const chat = useAppSelector(state => state.chat.chat)
	const { mutate } = UseSendMessage()
	const { mutate: mutateChat } = UseGetChatinfo()
	const dispatch: AppDispatch = useDispatch<AppDispatch>()

	const onSubmit = (text: IFormMessage) => {
		if (user && chat) {
			const data: ISendMessage = {
				text: text.message,
				senderId: user.id,
				recipientId: '',
				chatId: chat.id,
			}

			mutate(data, {
				onSuccess: responseData => {
					mutateChat(
						{ id: responseData.chatId },
						{ onSuccess: responseData => dispatch(changeChat(responseData)) }
					)
				},
			})

			reset()
		}
	}
	return (
		<form className={styles.section} onSubmit={handleSubmit(onSubmit)}>
			<Input<IFormMessage>
				register={register}
				registerName='message'
				required={true}
				placeholder='Enter message'
				imgRight='/images/send.svg'
				classNameImgRight={styles.img}
				onClickImgRight={handleSubmit(onSubmit)}
			/>
			<button type='submit' className={styles.button} />
		</form>
	)
}

export default ChatFooter
