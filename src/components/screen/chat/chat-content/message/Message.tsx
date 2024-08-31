import cn from 'classnames'
import { useEffect, useState } from 'react'
import { UseFindUser } from '../../../../../api/user/UseFindUser'
import { useAppSelector } from '../../../../../store/store'
import { IMessage } from '../../../../../types/api.types'
import { IUser } from '../../../../../types/user.types'
import { formatDate } from '../../../../../utils/formatDate'
import styles from './Message.module.scss'

const Message = ({ message }: { message: IMessage }) => {
	const user = useAppSelector(state => state.auth.user)
	const { mutate } = UseFindUser()

	const [author, setAuthor] = useState<IUser>()

	const isMine = user?.id === message.senderId

	useEffect(() => {
		mutate(
			{ id: message.senderId },
			{
				onSuccess: responseData => {
					setAuthor(responseData)
				},
			}
		)
	}, [])
	return (
		<>
			<div
				className={cn(styles.section, isMine && styles.section_other_message)}
			>
				<h2>
					{author?.name} {author?.surname}
				</h2>
				<div className={cn(styles.content, isMine && styles.other_message)}>
					<h3>{message.text}</h3>
				</div>
				<p className={styles.date}>{formatDate(message.updatedAt)}</p>{' '}
			</div>
		</>
	)
}

export default Message
