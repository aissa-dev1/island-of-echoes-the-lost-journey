import { Battle } from "./battle";

export class SmallMonsterBattle extends Battle {
  constructor() {
    super({
      startTimer: 3,
    });
  }
}
