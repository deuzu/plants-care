import CommandMessageInterface from './message-interface'

export default class TriggerWateringCommandMessage implements CommandMessageInterface {
  plantId: string

  constructor(plantId: string) {
    this.plantId = plantId
  }
}
