import { createEffect, onCleanup } from "solid-js";
import { store } from "../store";
import { soundController } from "../utils/sound";
import { Battle } from "../battles/battle";
import { Monster } from "../monsters/monster";

export function useBattle<T extends Battle, S extends Monster>(
  battle: T,
  monster: S
) {
  const player = () => store.player;
  let battleStartTimerInterval: number;
  let battleInterval: number;

  function startBattleStartTimer() {
    if (battle.state().readyToStart || battle.state().started) return;

    battle.setReadyToStart(true);
    battleStartTimerInterval = setInterval(() => {
      if (battle.state().startTimer <= 0) {
        battle.setReadyToStart(false);
        clearInterval(battleStartTimerInterval);
        return;
      }

      battle.setStartTimer(battle.state().startTimer - 1);
    }, 1000);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  function playerAttack() {
    monster.removeFromHealth(player().state.damage);
    soundController.play(soundController.swordSound);
  }

  function tryAgain() {
    player().setHealth(100);
  }

  createEffect(() => {
    if (battle.state().ended) {
      clearInterval(battleInterval);
      return;
    }

    if (battle.state().startTimer <= 0 && !battle.state().started) {
      battle.setStarted(true);
    }

    if (!battle.state().ended && battle.state().started && !battleInterval) {
      battleInterval = setInterval(() => {
        monster.attack(player());
      }, monster.attackSpeed);
    }

    if (!battle.state().ended && !monster.alive()) {
      battle.setWinner(player().state.name);
      battle.setEnded(true);
    }

    if (!battle.state().ended && !player().alive()) {
      battle.setWinner(monster.name);
      battle.setEnded(true);
    }
  });

  onCleanup(() => {
    clearInterval(battleStartTimerInterval);
    clearInterval(battleInterval);
  });

  return {
    battle,
    startBattleStartTimer,
    playerAttack,
    tryAgain,
    monster,
  };
}
