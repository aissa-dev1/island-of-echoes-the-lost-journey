import { SmallMonster } from "../monsters/small-monster";
import { store } from "../store";
import { SmallMonsterBattle } from "../battles/small-monster-battle";
import { useBattle } from "./use-battle";

export function useSmallMonsterBattle() {
  const battle = new SmallMonsterBattle();
  const smallMonster = new SmallMonster();
  const usedBattle = useBattle(battle, smallMonster);

  function playerAttack() {
    usedBattle.playerAttack();
  }

  function tryAgain() {
    usedBattle.tryAgain();
    store.parts.setTheSmallMonsterActive(false);
    store.parts.setTheSmallMonsterActive(true);
  }

  return {
    ...usedBattle,
    playerAttack,
    tryAgain,
  };
}
