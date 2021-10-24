import { Pool } from 'mariadb'

import Plant from '@domain/model/Plant'
import PlantRepositoryInterface from '@domain/repository/plant-repository-interface'

export default class PlantRepository implements PlantRepositoryInterface {
  private pool: Pool

  constructor(pool: Pool) {
    this.pool = pool
  }

  async findAll(): Promise<Plant[]> {
    const connection = await this.pool.getConnection()
    let rows

    try {
      rows = await connection.query('SELECT * FROM plants')
    } finally {
      connection.release()
    }

    delete rows.meta

    return rows.map((row: any) => {
      const plant = new Plant(row.name, row.instance, row.sensor, row.wateringMethod, row.wateringDuration, !!row.needWater)
      plant.id = row.id

      return plant
    })
  }

  async findByInstance(instance: string): Promise<Plant[]> {
    const connection = await this.pool.getConnection()
    let rows

    try {
      rows = await connection.query('SELECT * FROM plants WHERE instance=?', [instance])
    } finally {
      connection.release()
    }

    delete rows.meta

    console.log(instance, rows)

    return rows.map((row: any) => {
      const plant = new Plant(row.name, row.instance, row.sensor, row.wateringMethod, row.wateringDuration, !!row.needWater)
      plant.id = row.id

      return plant
    })
  }

  async insert(plant: Plant): Promise<void> {
    const connection = await this.pool.getConnection()

    try {
      await connection.query(
        'INSERT INTO plants VALUES (?, ?, ?, ?, ?, ?)',
        [null, plant.instance, plant.sensor, plant.wateringMethod, plant.wateringDuration, plant.needWater ?? null]
      );
    } finally {
      connection.release()
    }
  }

  async updateNeedWater(plantId: string, needWater: boolean): Promise<void> {
    const connection = await this.pool.getConnection()

    try {
      await connection.query(
        'UPDATE plants set needWater = ? WHERE id = ?',
        [needWater, plantId]
      );
    } finally {
      connection.release()
    }
  }
}
