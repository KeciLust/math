import Character from './Character';

export default class MathChar extends Character {
  constructor(name, type, range) {
    super(name, type);

    this.range = range;
  }

  set stoned(value) {
    this.basicStoned = value;
  }

  set attack(value) {
    this.basicAttack = Math.round(value * (1 - (this.range - 1) / 10));
  }

  get stoned() {
    return this.basicStoned;
  }

  get attack() {
    if (!this.stoned) {
      return this.basicAttack > 0 ? this.basicAttack : 0;
    }
    const x = this.basicAttack - Math.log2(this.range) * 5;
    return x > 0 ? Math.round(x) : 0;
  }
}
