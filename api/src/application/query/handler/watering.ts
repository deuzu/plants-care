import Plant from '@domain/model/Plant'
import Watering from '@domain/model/Watering'
import PlantRepositoryInterface from '@domain/repository/plant-repository-interface'

import QueryHandlerInterface from './handler-interface'
import WateringQueryMessage from '../message/watering'

export default class WateringQueryHandler implements QueryHandlerInterface {
  private plantRepository: PlantRepositoryInterface

  constructor(plantRepository: PlantRepositoryInterface) {
    this.plantRepository = plantRepository
  }

  async execute(message: WateringQueryMessage): Promise<Watering> {
    const plants = await this.plantRepository.findByInstance(message.instance)
    const watering = plants.reduce((accumulator: Watering, plant: Plant) => {
      if (true === plant.shouldWater()) {
        return Object.assign({}, accumulator, { [plant.sensor]: plant.wateringDuration })
      }

      return accumulator
    }, {})

    return watering
  }
}
