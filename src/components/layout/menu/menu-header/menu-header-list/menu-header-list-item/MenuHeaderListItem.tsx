import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { UseFormReset } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UseGetChatinfo } from '../../../../../../api/chat/UseGetChatInfo'
import { changeChat } from '../../../../../../store/slices/chatSlice'
import { AppDispatch } from '../../../../../../store/store'
import { IChat } from '../../../../../../types/api.types'
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
	const { mutate } = UseGetChatinfo()
	const navigate = useNavigate()

	const openChat = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()

		mutate(
			{ id: chat.id },
			{
				onSuccess: responseData => {
					navigate('/chat')
					dispatch(changeChat(responseData))
					setIsSearchValue(false)
					reset()
				},
			}
		)
	}

	return (
		<div className={styles.section} onClick={openChat}>
			<h3 className={styles.text}>{chat.name}</h3>
		</div>
	)
}

export default MenuHeaderListItem
