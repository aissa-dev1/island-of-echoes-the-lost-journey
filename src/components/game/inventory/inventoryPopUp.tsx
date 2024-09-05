import { store } from "../../../store";
import { soundController } from "../../../utils/sound";
import Icon from "../../reusable/icon";
import { PopUpContainer, PopUpOverlay } from "../../reusable/popUp";
import InventoryList from "./inventoryList";

export default function InventoryPopUp() {
  return (
    <PopUpOverlay
      onClick={() => {
        store.ui.setInventoryActive(false);
      }}
    >
      <PopUpContainer onClick={(e) => e.stopPropagation()}>
        <Icon
          class="absolute top-1 right-1 size-7 cursor-pointer"
          src="xmark.svg"
          alt="xmark"
          onClick={() => {
            store.ui.setInventoryActive(false);
            soundController.play(soundController.clickSound);
          }}
        />
        <InventoryList list={store.inventory.state.list} />
      </PopUpContainer>
    </PopUpOverlay>
  );
}
