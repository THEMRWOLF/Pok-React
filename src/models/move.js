class Move {
  constructor (id, name, description, effect, type, damage, power, accuracy, powerpoints, priority) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.effect = effect;
    this.type = type;
    this.damage = damage;
    this.power = power;
    this.accuracy = accuracy;
    this.powerpoints = powerpoints;
    this.priority = priority;
  }
}

export default Move;
