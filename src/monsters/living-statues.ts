import { Monster } from "./monster";

export class LivingStatues extends Monster {
  constructor() {
    super({
      name: "Living Statues",
      health: 50,
      damage: 5,
      attackSpeed: 400,
    });
  }
}
