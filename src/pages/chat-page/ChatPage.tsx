import Layout from '../../components/layout/Layout'
import Chat from '../../components/screen/chat/Chat'
import { useAppSelector } from '../../store/store'

const ChatPage = () => {
	const name = useAppSelector(state => state.chat.chat?.name)

	return (
		<Layout text={name || 'Chat Page'}>
			<Chat />
		</Layout>
	)
}

export default ChatPage
