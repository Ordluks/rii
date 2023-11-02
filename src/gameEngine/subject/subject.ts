import { Entity } from './objective/entity'
import { PerceptionEntity } from './perceptionEntity'

export class Subject {
  entityId: number
  vision = {}

  constructor(entityId: number) {
    this.entityId = entityId
  }

  perception(entities: PerceptionEntity[]) {
    this.vision = {
      ...this.vision,
      enitiesCount: entities.length
    }
  }
}
