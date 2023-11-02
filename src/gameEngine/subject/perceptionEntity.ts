import { Entity } from '../objective/entity'

export class PerceptionEntity {
  pos: [number, number, number]

  constructor(objectiveEntity: Entity) {
    const { pos } = objectiveEntity.__dump()
    this.pos = pos
  }  
}
