import { useForm } from 'react-hook-form'
import { IFormMessage } from '../../../../types/form.types'
import Input from '../../../ui/input/Input'
import styles from './ChatFooter.module.scss'

const ChatFooter = () => {
	const { register, handleSubmit, reset } = useForm<IFormMessage>()

	const onSubmit = (data: IFormMessage) => {
		console.log(data)
		reset()
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
