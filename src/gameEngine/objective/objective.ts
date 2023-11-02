import { Entity } from './entity'
import { Force } from './force'

export class Objective {
  entities: Entity[] = []
  private forces: Force[] = []

  addEntity() {
    const id = this.entities.length
    const entity = new Entity(id)
    this.entities.push(entity)
    return entity
  }

  defineForce(force: Force) {
    this.forces.push(force)
  }

  doEffect() {
    this.forces.forEach((force) => {
      this.entities.forEach((entity) => {
        force.effect(entity)
      })
    })
  }
}
