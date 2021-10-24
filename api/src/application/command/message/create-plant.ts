import Plant from '@domain/model/Plant'

import CommandMessageInterface from './message-interface'

export default class CreatePlantCommandMessage implements CommandMessageInterface {
  plant: Plant

  constructor(plant: Plant) {
    this.plant = plant
  }
}
