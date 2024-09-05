import { createSignal } from "solid-js";
import { store } from "../../../store";
import { PopUpContainer, PopUpOverlay } from "../../reusable/popUp";
import StatDisplay from "../reusable/statDisplay";
import InventoryButton from "./inventoryButton";
import { InventoryItemType } from "../../../features/inventory";
import ChooseCard from "../../reusable/chooseCard";
import Icon from "../../reusable/icon";
import { soundController } from "../../../utils/sound";

type Active = "damage" | "map" | null;

export default function MysteriousChestPopUp() {
  const [active, setActive] = createSignal<Active>(null);

  function choose() {
    if (!active()) {
      return;
    }

    store.ui.setMysteriousChestActive(false);
    store.inventory.removeItemByTitle("Mysterious Chest");

    if (active() === "damage") {
      store.player.addToDamage(2);
      return;
    }

    store.inventory.addItem({
      type: InventoryItemType.Map,
      title: "Old Map",
      description: "This map will save you from any trap in the Forest.",
    });
  }

  return (
    <PopUpOverlay
      onClick={() => {
        store.ui.setMysteriousChestActive(false);
      }}
    >
      <PopUpContainer onClick={(e) => e.stopPropagation()}>
        <Icon
          class="absolute top-1 right-1 size-7 cursor-pointer"
          src="xmark.svg"
          alt="xmark"
          onClick={() => {
            store.ui.setMysteriousChestActive(false);
            soundController.play(soundController.clickSound);
          }}
        />
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
          <ChooseCard<Active>
            class="max-lg:h-[175px]"
            active={active}
            activeIfEqual="damage"
            onClick={() => {
              setActive("damage");
            }}
          >
            <StatDisplay
              icon={<Icon src="sword.svg" alt="sword" />}
              value="+2"
            />
          </ChooseCard>
          <ChooseCard<Active>
            class="max-lg:h-[175px]"
            active={active}
            activeIfEqual="map"
            onClick={() => {
              setActive("map");
            }}
          >
            <StatDisplay
              icon={<Icon src="map.svg" alt="map" />}
              value="Old Map"
            />
          </ChooseCard>
        </div>
        <div class="flex items-center justify-center mt-4">
          <InventoryButton onClick={choose}>Choose</InventoryButton>
        </div>
      </PopUpContainer>
    </PopUpOverlay>
  );
}
