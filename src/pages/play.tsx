import { Show } from "solid-js";
import BeginningPart from "../components/game/parts/beginning";
import ArrivingAtTheIslandPart from "../components/game/parts/arrivingAtTheIsland";
import Container from "../components/reusable/container";
import { store } from "../store";
import ExploreTheBeachPart from "../components/game/parts/exploreTheBeach";
import Header from "../components/game/header";
import { useScreenScroll } from "../hooks/use-screen-scroll";
import EnterTheForestPart from "../components/game/parts/enterTheForest";
import TheSmallMonsterPart from "../components/game/parts/theSmallMonster";
import SmallMonsterRewardPart from "../components/game/parts/smallMonsterReward";
import InventoryPopUp from "../components/game/inventory/inventoryPopUp";
import FollowTheOldTrialPart from "../components/game/parts/followTheOldTrial";
import CircumventTheTemplePart from "../components/game/parts/circumventTheTemple";
import LivingStatuesPart from "../components/game/parts/livingStatues";
import LivingStatuesRewardPart from "../components/game/parts/livingStatuesReward";
import VenomousSnakesPart from "../components/game/parts/venomousSnakes";
import VenomousSnakesRewardPart from "../components/game/parts/venomousSnakesReward";
import MeetingSideCharactersPart from "../components/game/parts/meetingSideCharacters";
import TheLostExplorerPart from "../components/game/parts/theLostExplorer";
import ReachingTheProphecyChamberPart from "../components/game/parts/reachingTheProphecyChamber";
import TheMysteriousCharacterPart from "../components/game/parts/theMysteriousCharacter";

export default function Play() {
  useScreenScroll();
  const parts = () => store.parts.state;

  return (
    <div class="flex flex-col gap-4">
      <Header />
      <Show when={store.ui.state.inventoryActive}>
        <InventoryPopUp />
      </Show>
      <Container class="flex flex-col gap-6 bg-primary text-white p-8 rounded-lg !mt-28">
        <BeginningPart />
        <Show when={parts().arrivingAtTheIslandActive}>
          <ArrivingAtTheIslandPart />
        </Show>
        <Show when={parts().exploreTheBeachActive}>
          <ExploreTheBeachPart />
          <Show when={parts().theSmallMonsterActive}>
            <TheSmallMonsterPart />
            <Show when={parts().smallMonsterRewardActive}>
              <SmallMonsterRewardPart />
            </Show>
          </Show>
        </Show>
        <Show when={parts().enterTheForestActive}>
          <EnterTheForestPart />
        </Show>
        <Show when={parts().followTheOldTrialActive}>
          <FollowTheOldTrialPart />
          <Show when={parts().livingStatuesActive}>
            <LivingStatuesPart />
            <Show when={parts().livingStatuesRewardActive}>
              <LivingStatuesRewardPart />
            </Show>
          </Show>
        </Show>
        <Show when={parts().circumventTheTempleActive}>
          <CircumventTheTemplePart />
          <Show when={parts().venomousSnakesActive}>
            <VenomousSnakesPart />
            <Show when={parts().venomousSnakesRewardActive}>
              <VenomousSnakesRewardPart />
            </Show>
          </Show>
        </Show>
        <Show when={parts().meetingSideCharactersActive}>
          <MeetingSideCharactersPart />
          <Show when={parts().theLostExplorerActive}>
            <TheLostExplorerPart />
          </Show>
          <Show when={parts().theMysteriousCharacterActive}>
            <TheMysteriousCharacterPart />
          </Show>
        </Show>
        <Show when={parts().reachingTheProphecyChamberActive}>
          <ReachingTheProphecyChamberPart />
        </Show>
      </Container>
    </div>
  );
}
