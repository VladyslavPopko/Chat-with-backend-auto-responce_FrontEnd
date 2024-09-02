import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from 'react'

interface ToastContextType {
	isToastActive: boolean
	toastText: string
	showToast: (text: string) => void
	hideToast: () => void
}
const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
	const context = useContext(ToastContext)
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider')
	}
	return context
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
	const [isToastActive, setIsToastActive] = useState<boolean>(false)
	const [toastText, setToastText] = useState<string>('')

	const showToast = useCallback((text: string) => {
		setToastText(text)
		setIsToastActive(true)
	}, [])

	const hideToast = useCallback(() => {
		setIsToastActive(false)
	}, [])

	return (
		<ToastContext.Provider
			value={{ isToastActive, toastText, showToast, hideToast }}
		>
			{children}
		</ToastContext.Provider>
	)
}
