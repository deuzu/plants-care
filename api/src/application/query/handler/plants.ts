import Plant from '@domain/model/Plant'
import PlantRepositoryInterface from '@domain/repository/plant-repository-interface'

import QueryHandlerInterface from './handler-interface'
import PlantsQueryMessage from '../message/plants'

export default class PlantsQueryHandler implements QueryHandlerInterface {
  private plantRepository: PlantRepositoryInterface

  constructor(plantRepository: PlantRepositoryInterface) {
    this.plantRepository = plantRepository
  }

  async execute(message: PlantsQueryMessage): Promise<Plant[]> {
    const plants = await this.plantRepository.findAll()


    return plants
  }
}
