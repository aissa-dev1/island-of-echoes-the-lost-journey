import { store } from "../store";
import { useBattle } from "./use-battle";
import { LivingStatuesBattle } from "../battles/living-statues-battle";
import { LivingStatues } from "../monsters/living-statues";

export function useLivingStatuesBattle() {
  const battle = new LivingStatuesBattle();
  const livingStatues = new LivingStatues();
  const usedBattle = useBattle(battle, livingStatues);

  function playerAttack() {
    usedBattle.playerAttack();
  }

  function tryAgain() {
    usedBattle.tryAgain();
    store.parts.setLivingStatuesActive(false);
    store.parts.setLivingStatuesActive(true);
  }

  return {
    ...usedBattle,
    playerAttack,
    tryAgain,
  };
}
