import { useEffect, useState } from 'react'
import { UseFindUser } from '../../../../api/user/UseFindUser'
import { IUser } from '../../../../types/user.types'
import styles from './UserInChat.module.scss'

const UserInChat = ({ userID }: { userID: string }) => {
	const { mutate } = UseFindUser()
	const [user, setUser] = useState<IUser>()

	useEffect(() => {
		mutate(
			{ id: userID },
			{
				onSuccess: responseData => {
					setUser(responseData)
				},
			}
		)
	}, [])

	console.log(userID)

	return (
		<div className={styles.section}>
			<img className={styles.img} src={user?.avatar || '/images/avatar.svg'} />
			<h3 className={styles.text}>
				{user?.name} {user?.surname}
			</h3>
		</div>
	)
}

export default UserInChat
