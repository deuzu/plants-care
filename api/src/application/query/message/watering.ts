import MessageInterface from './message-interface'

export default class WateringQueryMessage implements MessageInterface {
  instance: string

  constructor(instance: string) {
    this.instance = instance
  }
}
