import PlantRepositoryInterface from '@domain/repository/plant-repository-interface'

import CommandHandlerInterface from './handler-interface'
import CancelWateringCommandMessage from '../message/cancel-watering'

export default class CancelWateringCommandHandler implements CommandHandlerInterface {
  private plantRepository: PlantRepositoryInterface

  constructor(plantRepository: PlantRepositoryInterface) {
    this.plantRepository = plantRepository
  }

  execute(message: CancelWateringCommandMessage): void {
    this.plantRepository.updateNeedWater(message.plantId, false)
  }
}
