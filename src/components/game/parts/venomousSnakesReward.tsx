import { onMount, Show } from "solid-js";
import { InventoryItemType } from "../../../features/inventory";
import { useAnimatedText } from "../../../hooks/use-animated-text";
import { useScreenScroll } from "../../../hooks/use-screen-scroll";
import { store } from "../../../store";
import Separator from "../../reusable/separator";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartContent from "../reusable/partContent";
import PartContentContainer from "../reusable/partContentContainer";
import PartTitle from "../reusable/partTitle";
import MedkitPopUp from "../inventory/medkitPopUp";

export default function VenomousSnakesRewardPart() {
  useScreenScroll();
  const title = useAnimatedText("Venomous Snakes Battle Reward");

  onMount(() => {
    store.inventory.addItem({
      type: InventoryItemType.Medkit,
      title: "Medkit",
      description: "This potion help you recover some of your health.",
      value: 50,
      onUse() {
        store.ui.setInventoryActive(false);
        store.ui.setMedkitActive(true);
      },
    });
    store.inventory.addItem({
      type: InventoryItemType.Monster,
      title: "Venomous Snakes",
      description: "These little animals may look cute but they sting!",
    });
  });

  return (
    <>
      <PartContainer>
        <Separator />
        <PartTitle>{title()}</PartTitle>
        <PartContentContainer>
          <PartContent>A medkit of 50 to heal your health. ❤️‍🩹</PartContent>
          <PartContent>A statue of the Venomous Snakes. 🗿</PartContent>
        </PartContentContainer>
        <PartActions>
          <PartButton
            onClick={() => {
              store.parts.setMeetingSideCharactersActive(true);
            }}
          >
            Continue
          </PartButton>
        </PartActions>
      </PartContainer>
      <Show when={store.ui.state.medkitActive}>
        <MedkitPopUp />
      </Show>
    </>
  );
}
