// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  // no need for constructor
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  // proprieties
  vikingArmy = [];
  saxonArmy = [];
  // methods
  addViking(newViking) {
    this.vikingArmy.push(newViking);
  }
  addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }
  vikingAttack() {
    let indexRandomSaxon = Math.floor(Math.random()) * this.vikingArmy.length;
    let indexRandomViking = Math.floor(Math.random()) * this.saxonArmy.length;

    let damage = this.vikingArmy[indexRandomViking].strength;
    let resultado = this.saxonArmy[indexRandomSaxon].receiveDamage(damage);
    console.log(resultado, '<---------', damage);
    //removing saxon if dead
    if (resultado === `A Saxon has died in combat`) {
      this.saxonArmy.splice(indexRandomSaxon, 1);
    }

    //

    return resultado;
  }
  saxonAttack() {}
  showStatus() {}
}
