// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super (name, health)
    this.name = name;
    this.health = health
    this.strength = strength
  }

  receiveDamage(damage){
    this.health -= damage
      if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`
      } else if (this.health <= 0){
        return `${this.name} has died in act of combat`
      }   
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health <= 0){
      return `A Saxon has died in combat`
    }  
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(charViking){
    this.vikingArmy.push(charViking)
  }

  addSaxon(charSaxon){
    this.saxonArmy.push(charSaxon)
  }

  vikingAttack(){
    let randomvikingArmy = [Math.floor(Math.random()* this.vikingArmy.length)]
    let randomSaxonArmy = [Math.floor(Math.random()* this.saxonArmy.length)]

    let vikingRandom = this.vikingArmy[randomvikingArmy]
    let saxonRandom = this.saxonArmy[randomSaxonArmy]

    saxonRandom.receiveDamage(vikingRandom.attack())
      if (saxonRandom.health <= 0) {
        this.saxonArmy.splice(randomSaxonArmy, 1)
      }
      return `A Saxon has died in combat`

  }

  saxonAttack(){
    let randomvikingArmy = [Math.floor(Math.random()* this.vikingArmy.length)]
    let randomSaxonArmy = [Math.floor(Math.random()* this.saxonArmy.length)]

    let vikingRandom = this.vikingArmy[randomvikingArmy]
    let saxonRandom = this.saxonArmy[randomSaxonArmy]

    vikingRandom.receiveDamage(saxonRandom.attack())
      if (vikingRandom.health <= 0) {
        this.vikingArmy.splice(randomvikingArmy, 1)
      }
      return `${vikingRandom.name} has received ${saxonRandom.attack()} points of damage`

  }

  showStatus(){
    if (this.saxonArmy.length <= 0){
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
