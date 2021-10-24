import Plant from '../model/Plant'

export default interface PlantRepositoryInterface {
  findAll(): Promise<Plant[]>
  findByInstance(instance: string): Promise<Plant[]>
  insert(plant: Plant): void
  updateNeedWater(plantId: string, needWater: boolean): void
}
