import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUserToChatPage from './pages/add-user-to-chat-page/AddUserToChatPage'
import AuthPage from './pages/auth-page/AuthPage'
import ChatPage from './pages/chat-page/ChatPage'
import HomePage from './pages/home-page/HomePage'
import ListUsersInChatPage from './pages/list-users-in-chat-page/ListUserInChatPage'
import NewChatPage from './pages/new-chat-page/NewChat'
import NotFoundPage from './pages/not-found-page/NotFoundPage'
import ProfilePage from './pages/profile-page/ProfilePage'
import RegisterPage from './pages/register-page/RegisterPage'
import './styles/global.scss'

function App() {
	useEffect(() => {
		const handleContextMenu = (event: Event) => {
			event.preventDefault()
		}

		document.addEventListener('contextmenu', handleContextMenu)

		return () => {
			document.removeEventListener('contextmenu', handleContextMenu)
		}
	}, [])
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/chat' element={<ChatPage />} />
				<Route path='/auth' element={<AuthPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/new-chat' element={<NewChatPage />} />
				<Route path='/list-users-in-chat' element={<ListUsersInChatPage />} />
				<Route path='/add-user-to-chat' element={<AddUserToChatPage />} />

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
