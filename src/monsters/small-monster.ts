import { Monster } from "./monster";

export class SmallMonster extends Monster {
  constructor() {
    super({
      name: "Small Monster",
      health: 30,
      damage: 1,
      attackSpeed: 500,
    });
  }
}
