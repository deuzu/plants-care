import Message from '../message/message-interface'

export default interface CommandHandlerInterface {
  execute(message: Message): void
}
