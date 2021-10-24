import CommandMessageInterface from './message-interface'

export default class CancelWateringCommandMessage implements CommandMessageInterface {
  plantId: string

  constructor(plantId: string) {
    this.plantId = plantId
  }
}
