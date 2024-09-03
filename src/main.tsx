import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ToastProvider } from './context/ToastContext.tsx'
import { store } from './store/store.ts'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<BrowserRouter>
					<ToastProvider>
						<App />
					</ToastProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</BrowserRouter>
			</Provider>
		</QueryClientProvider>
	</StrictMode>
)
