import { Battle } from "./battle";

export class LivingStatuesBattle extends Battle {
  constructor() {
    super({
      startTimer: 5,
    });
  }
}
