import { Entity } from './entity'

export class Force {
  affects: string[] = []

  addAffect(entityType: string) {
    this.affects.push(entityType)
  }

  effect(_entity: Entity) {
    return
  }
}
