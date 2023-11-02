import { clone } from 'ramda'
import { Entity } from './objective/entity'
import { Objective } from './objective/objective'
import { Subject } from './subject/subject'
import { PerceptionEntity } from './subject/perceptionEntity'

export class Engine {
  objective: Objective
  subjects: Subject[] = []

  constructor() {
    this.objective = new Objective()
  }

  moment() {
    const perceptEntities = this.objective.entities.map((value) => new PerceptionEntity(value))
    this.subjects.forEach((value) => {
    value.perception(perceptEntities)
    })
    this.objective.doEffect()

    setTimeout(() => this.moment(), 100)
  }

  start() {
    this.moment()
  }

  attachSubject(entity: Entity) {
    const subject = new Subject(entity.id)
    this.subjects.push(subject)
    return subject
  }
}
