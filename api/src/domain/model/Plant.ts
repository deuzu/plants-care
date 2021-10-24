type wateringMethod = 'automatic'|'scheduled'|'manual'

export default class Plant {
  id: string|null = null
  name: string|null = null
  instance: string
  sensor: string
  wateringMethod: wateringMethod
  wateringDuration: number
  needWater: boolean|null

  constructor(name: string|null, instance: string, sensor: string, wateringMethod: wateringMethod, wateringDuration: number, needWater: boolean|null = null) {
    this.name = name
    this.instance = instance
    this.sensor = sensor
    this.wateringMethod = wateringMethod
    this.wateringDuration = wateringDuration
    this.needWater = needWater
  }

  shouldWater(): boolean {
    if ('manual' === this.wateringMethod) {
      return true === this.needWater
    }

    return false
  }
}
