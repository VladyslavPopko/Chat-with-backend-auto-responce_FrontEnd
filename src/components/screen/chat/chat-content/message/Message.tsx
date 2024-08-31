import { useEffect, useState } from 'react'
import { UseFindUser } from '../../../../../api/user/UseFindUser'
import { IMessage } from '../../../../../types/api.types'
import { IUser } from '../../../../../types/user.types'
import { formatDate } from '../../../../../utils/formatDate'
import styles from './Message.module.scss'

const Message = ({ message }: { message: IMessage }) => {
	const { mutate } = UseFindUser()

	const [user, setUser] = useState<IUser>()

	useEffect(() => {
		mutate(
			{ id: message.senderId },
			{
				onSuccess: responseData => {
					setUser(responseData)
				},
			}
		)
	}, [])
	return (
		<>
			<div className={styles.section}>
				<h2>
					{user?.name} {user?.surname}
				</h2>
				<h3>{message.text}</h3>
			</div>
			<p className={styles.date}>{formatDate(message.updatedAt)}</p>
		</>
	)
}

export default Message
