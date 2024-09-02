import {
	Dispatch,
	MouseEvent,
	SetStateAction,
	useEffect,
	useState,
} from 'react'
import { UseFormReset } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UseGetChatinfo } from '../../../../../../api/chat/UseGetChatInfo'
import { changeChat } from '../../../../../../store/slices/chatSlice'
import { AppDispatch, useAppSelector } from '../../../../../../store/store'
import { IChat, IChatDetail } from '../../../../../../types/api.types'
import { IFormSearch } from '../../../../../../types/form.types'
import styles from './MenuHeaderListItem.module.scss'

const MenuHeaderListItem = ({
	chat,
	setIsSearchValue,
	reset,
}: {
	reset: UseFormReset<IFormSearch>
	chat: IChat
	setIsSearchValue: Dispatch<SetStateAction<boolean>>
}) => {
	const dispatch: AppDispatch = useDispatch<AppDispatch>()
	const userID = useAppSelector(state => state.auth.user?.id)
	const { mutate } = UseGetChatinfo()
	const navigate = useNavigate()
	const [chatInfo, setChatInfo] = useState<IChatDetail>()

	let chatName
	if (chatInfo && userID) {
		chatName = chatInfo.chatUsers.filter(chat => chat.userId === userID)[0]
			.displayedName
	}

	useEffect(() => {
		mutate(
			{ id: chat.id },
			{
				onSuccess: responseData => {
					setChatInfo(responseData)
				},
			}
		)
	}, [])

	const openChat = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()

		mutate(
			{ id: chat.id },
			{
				onSuccess: responseData => {
					dispatch(changeChat(responseData))
					setIsSearchValue(false)
					navigate('/chat')
					reset()
				},
			}
		)
	}

	return (
		<div className={styles.section} onClick={openChat}>
			<h3 className={styles.text}>{chatName ? chatName : chat.name}</h3>
		</div>
	)
}

export default MenuHeaderListItem
