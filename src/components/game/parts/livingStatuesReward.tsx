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

export default function LivingStatuesRewardPart() {
  useScreenScroll();
  const title = useAnimatedText("Living Statues Battle Reward");

  onMount(() => {
    store.inventory.addItem({
      type: InventoryItemType.Medkit,
      title: "Medkit",
      description: "This potion help you recover some of your health.",
      value: 25,
      onUse() {
        store.ui.setInventoryActive(false);
        store.ui.setMedkitActive(true);
      },
    });
    store.inventory.addItem({
      type: InventoryItemType.Monster,
      title: "Living Statues",
      description: "You will not conquer the Old Trail for a long time! Grrr.",
    });
  });

  return (
    <>
      <PartContainer>
        <Separator />
        <PartTitle>{title()}</PartTitle>
        <PartContentContainer>
          <PartContent>A medkit of 25 to heal your health. ❤️‍🩹</PartContent>
          <PartContent>A statue of the Living Statues.</PartContent>
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
