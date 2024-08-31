import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth-page/AuthPage'
import ChatPage from './pages/chat-page/ChatPage'
import HomePage from './pages/home-page/HomePage'
import NotFoundPage from './pages/not-found-page/NotFoundPage'
import ProfilePage from './pages/profile-page/ProfilePage'
import RegisterPage from './pages/register-page/RegisterPage'
import './styles/global.scss'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/chat' element={<ChatPage />} />
				<Route path='auth' element={<AuthPage />} />
				<Route path='profile' element={<ProfilePage />} />
				<Route path='register' element={<RegisterPage />} />

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
