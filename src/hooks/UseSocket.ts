import { useQueryClient } from '@tanstack/react-query'
import { useCallback, useEffect, useRef } from 'react'
import io, { Socket } from 'socket.io-client'
import { IMessage } from '../types/api.types'

const useSocket = (url: string) => {
	const socketRef = useRef<Socket | null>(null)
	const queryClient = useQueryClient()

	useEffect(() => {
		socketRef.current = io(url)

		socketRef.current.on('message', (message: IMessage) => {
			queryClient.setQueryData(
				['socket-data'],
				(oldData: IMessage[] | undefined) => [...(oldData || []), message]
			)
		})

		return () => {
			socketRef.current?.disconnect()
		}
	}, [url, queryClient])

	const sendMessage = useCallback((message: IMessage) => {
		socketRef.current?.emit('send-message', message)
	}, [])

	return { socketRef, sendMessage }
}

export default useSocket
