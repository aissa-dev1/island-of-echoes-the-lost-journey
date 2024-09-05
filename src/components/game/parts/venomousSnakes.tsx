import { Show } from "solid-js";
import { useAnimatedText } from "../../../hooks/use-animated-text";
import { useScreenScroll } from "../../../hooks/use-screen-scroll";
import Separator from "../../reusable/separator";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartContent from "../reusable/partContent";
import PartContentContainer from "../reusable/partContentContainer";
import PartTitle from "../reusable/partTitle";
import StatDisplay from "../reusable/statDisplay";
import { store } from "../../../store";
import Button from "../../reusable/button";
import Icon from "../../reusable/icon";
import { useVenomousSnakesBattle } from "../../../hooks/use-venomous-snakes";

export default function VenomousSnakesPart() {
  useScreenScroll();
  const title = useAnimatedText("Venomous Snakes");
  const { battle, startBattleStartTimer, playerAttack, tryAgain, monster } =
    useVenomousSnakesBattle();

  return (
    <PartContainer>
      <Separator />
      <PartTitle>{title()}</PartTitle>
      <PartContentContainer>
        <StatDisplay
          icon={<Icon class="size-7" src="heart.svg" alt="heart" />}
          value={`${monster.healthPerSnake} * ${
            monster.count
          }: ${monster.health()}`}
        />
        <StatDisplay
          icon={<Icon class="size-6" src="sword.svg" alt="sword" />}
          value={`${monster.damagePerSnake} * ${monster.count}: ${monster.damage}`}
        />
        <StatDisplay
          icon={
            <>
              <Icon class="size-6" src="time-fast.svg" alt="time-fast" />
              <Icon class="size-6" src="sword.svg" alt="sword" />
            </>
          }
          value={`${monster.attackSpeed} ms`}
        />
        <Show when={battle.state().readyToStart}>
          <PartContent>
            Battle starts at {battle.state().startTimer}
          </PartContent>
        </Show>
        <Show when={battle.state().ended}>
          <PartContent>The winner is {battle.state().winner}</PartContent>
        </Show>
      </PartContentContainer>
      <PartActions>
        <Show when={!battle.state().ended}>
          <PartButton
            onClick={startBattleStartTimer}
            disabled={battle.state().started || battle.state().ended}
          >
            Start battle
          </PartButton>
        </Show>
        <Show
          when={
            !battle.state().ended &&
            (battle.state().readyToStart || battle.state().started)
          }
        >
          <Button
            variant="page"
            onClick={playerAttack}
            disabled={!battle.state().started}
          >
            Attack
          </Button>
        </Show>
        <Show
          when={
            battle.state().ended &&
            battle.state().winner === store.player.state.name
          }
        >
          <PartButton
            onClick={() => {
              store.parts.setVenomousSnakesRewardActive(true);
            }}
          >
            Continue
          </PartButton>
        </Show>
        <Show
          when={battle.state().ended && battle.state().winner === monster.name}
        >
          <PartButton onClick={tryAgain}>Try again</PartButton>
        </Show>
      </PartActions>
    </PartContainer>
  );
}
