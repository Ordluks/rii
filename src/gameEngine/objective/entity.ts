export class Entity {
  id: number

  private pos = [0, 0, 0]

  constructor(id: number) {
    this.id = id
  }

  changePos(pos: [number, number, number]) {
    this.pos = pos
  }

  __dump() {
    return {
      pos: this.pos
    }
  }
}
