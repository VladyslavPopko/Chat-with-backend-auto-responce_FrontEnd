import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth-page/AuthPage'
import HomePage from './pages/home-page/HomePage'
import NotFoundPage from './pages/not-found-page/NotFoundPage'
import './styles/global.scss'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='auth' element={<AuthPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
