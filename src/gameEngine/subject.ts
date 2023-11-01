import { Entity } from './entity'

export class Subject {
  entityId: number
  vision = {}

  constructor(entityId: number) {
    this.entityId = entityId
  }

  perception(objectiveEntities: Entity[]) {
    this.vision = {
      ...this.vision,
      enitiesCount: objectiveEntities.length
    }
  }
}
