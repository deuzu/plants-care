import Message from '../message/message-interface'
import Response from '../response-interface'

export default interface QueryHandlerInterface {
  execute(message: Message): Promise<Response>
}
