import PlantRepositoryInterface from '@domain/repository/plant-repository-interface'

import CommandHandlerInterface from './handler-interface'
import TriggerWateringCommandMessage from '../message/trigger-watering'

export default class TriggerWateringCommandHandler implements CommandHandlerInterface {
  private plantRepository: PlantRepositoryInterface

  constructor(plantRepository: PlantRepositoryInterface) {
    this.plantRepository = plantRepository
  }

  execute(message: TriggerWateringCommandMessage): void {
    this.plantRepository.updateNeedWater(message.plantId, true)
  }
}
