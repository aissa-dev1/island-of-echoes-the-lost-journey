import { Monster } from "./monster";

export class VenomousSnakes extends Monster {
  readonly count = 4;
  readonly healthPerSnake = 20;
  readonly damagePerSnake = 2;

  constructor() {
    super({
      name: "Venomous Snakes",
      health: 20,
      damage: 2,
      attackSpeed: 750,
    });
    this.setHealth(this.healthPerSnake * this.count);
    this.setDamage(this.damagePerSnake * this.count);
  }
}
