import { clone } from 'ramda'
import { Entity } from './entity'
import { Objective } from './objective'
import { Subject } from './subject'

export class Engine {
  objective: Objective
  subjects: Subject[] = []

  constructor() {
    this.objective = new Objective()
  }

  moment() {
    this.subjects.forEach((value) => {
      value.perception(clone(this.objective.entities))
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
  }
}
