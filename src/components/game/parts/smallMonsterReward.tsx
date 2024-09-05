import { onMount, Show } from "solid-js";
import { useAnimatedText } from "../../../hooks/use-animated-text";
import { useScreenScroll } from "../../../hooks/use-screen-scroll";
import Separator from "../../reusable/separator";
import PartActions from "../reusable/partActions";
import PartButton from "../reusable/partButton";
import PartContainer from "../reusable/partContainer";
import PartContent from "../reusable/partContent";
import PartContentContainer from "../reusable/partContentContainer";
import PartTitle from "../reusable/partTitle";
import { store } from "../../../store";
import { InventoryItem, InventoryItemType } from "../../../features/inventory";
import MysteriousChestPopUp from "../inventory/mysteriousChestPopUp";

export default function SmallMonsterRewardPart() {
  useScreenScroll();
  const title = useAnimatedText("Small Monster Battle Reward");

  onMount(() => {
    const updatedList = store.inventory.state.list.map((item) => {
      if (
        item.type === InventoryItemType.Chest &&
        item.title.toLowerCase() === "mysterious chest"
      ) {
        const newItem: InventoryItem = {
          ...item,
          locked: false,
        };

        return newItem;
      }

      return item;
    });
    store.inventory.update(updatedList);
    store.inventory.addItem({
      type: InventoryItemType.Monster,
      title: "Small Monster",
      description: "Call me the beach protector.",
    });
  });

  return (
    <>
      <PartContainer>
        <Separator />
        <PartTitle>{title()}</PartTitle>
        <PartContentContainer>
          <PartContent>A key to open the mysterious chest. 🔐</PartContent>
          <PartContent>A statue of the Small Monster. 🗿</PartContent>
        </PartContentContainer>
        <PartActions>
          <PartButton
            onClick={() => {
              store.parts.setEnterTheForestActive(true);
            }}
          >
            Enter the Forest
          </PartButton>
        </PartActions>
      </PartContainer>
      <Show when={store.ui.state.mysteriousChestActive}>
        <MysteriousChestPopUp />
      </Show>
    </>
  );
}
