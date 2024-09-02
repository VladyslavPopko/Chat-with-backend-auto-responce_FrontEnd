import cn from 'classnames'
import { useEffect, useState } from 'react'
import { UseFindUser } from '../../../../../api/user/UseFindUser'
import { useAppSelector } from '../../../../../store/store'
import { IMessage } from '../../../../../types/api.types'
import { IUser } from '../../../../../types/user.types'
import { formatDate } from '../../../../../utils/formatDate'
import styles from './Message.module.scss'
import MessageMenu from './message-menu/MessageMenu'

const Message = ({ message }: { message: IMessage }) => {
	const user = useAppSelector(state => state.auth.user)
	const { mutate } = UseFindUser()
	const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)

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

	const handleContextMenu = () => {
		setIsVisibleMenu(!isVisibleMenu)
	}

	const handleCloseMenu = () => {
		setIsVisibleMenu(false)
	}

	return (
		<>
			<div
				className={cn(styles.section, isMine && styles.section_other_message)}
				onClick={handleCloseMenu}
			>
				<div className={styles.author}>
					<img
						src={author?.avatar ? author.avatar : '/images/avatar.svg'}
						draggable={false}
						className={styles.img}
					/>
					<h2>
						{author?.name} {author?.surname}
					</h2>
				</div>
				<div
					className={cn(styles.content, isMine && styles.other_message)}
					onContextMenu={handleContextMenu}
				>
					<h3>{message.text}</h3>
					{isVisibleMenu && (
						<MessageMenu
							message={message}
							setIsVisibleMenu={setIsVisibleMenu}
						/>
					)}
				</div>
				<p className={styles.date}>
					{message.isRead ? 'readed ' : 'not readed '}
					{formatDate(message.updatedAt)}
				</p>
			</div>
		</>
	)
}

export default Message
