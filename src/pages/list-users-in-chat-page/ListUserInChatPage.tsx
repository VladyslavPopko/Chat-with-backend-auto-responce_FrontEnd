import Layout from '../../components/layout/Layout'
import ListUsersInChat from '../../components/screen/list-users-in-chat/ListUsersInChat'
import { useAppSelector } from '../../store/store'

const ListUsersInChatPage = () => {
	const chat = useAppSelector(state => state.chat.chat)
	return (
		<>
			<Layout
				text={chat?.name ? `List users in ${chat.name}` : `List users Page`}
			>
				<ListUsersInChat />
			</Layout>
		</>
	)
}

export default ListUsersInChatPage
