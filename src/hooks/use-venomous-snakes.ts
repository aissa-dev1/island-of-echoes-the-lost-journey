import { VenomousSnakesBattle } from "../battles/venomous-snakes-battle";
import { VenomousSnakes } from "../monsters/venomous-snakes";
import { store } from "../store";
import { useBattle } from "./use-battle";

export function useVenomousSnakesBattle() {
  const battle = new VenomousSnakesBattle();
  const venomousSnakes = new VenomousSnakes();
  const usedBattle = useBattle<VenomousSnakesBattle, VenomousSnakes>(
    battle,
    venomousSnakes
  );

  function playerAttack() {
    usedBattle.playerAttack();
  }

  function tryAgain() {
    usedBattle.tryAgain();
    store.parts.setVenomousSnakesActive(false);
    store.parts.setVenomousSnakesActive(true);
  }

  return {
    ...usedBattle,
    playerAttack,
    tryAgain,
  };
}
