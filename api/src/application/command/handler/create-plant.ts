import PlantRepositoryInterface from '@domain/repository/plant-repository-interface'

import CommandHandlerInterface from './handler-interface'
import CreatePlantCommandMessage from '../message/create-plant'

export default class CreatePlantCommandHandler implements CommandHandlerInterface {
  private plantRepository: PlantRepositoryInterface

  constructor(plantRepository: PlantRepositoryInterface) {
    this.plantRepository = plantRepository
  }

  execute(message: CreatePlantCommandMessage): void {
    this.plantRepository.insert(message.plant)
  }
}
