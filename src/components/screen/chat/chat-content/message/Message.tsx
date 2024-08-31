import { IMessage } from '../../../../../types/api.types'

const Message = ({ message }: { message: IMessage }) => {
	return <div>{message.text}</div>
}

export default Message
