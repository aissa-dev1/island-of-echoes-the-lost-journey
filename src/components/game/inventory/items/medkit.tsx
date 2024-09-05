import { createSignal, Show } from "solid-js";
import { InventoryItem } from "../../../../features/inventory";
import { PopUpContainer, PopUpOverlay } from "../../../reusable/popUp";
import { store } from "../../../../store";
import PartActions from "../../reusable/partActions";
import InventoryButton from "../inventoryButton";
import InventoryItemShape from "../inventoryItemShape";
import InventoryItemHeader from "../inventoryItemHeader";
import Icon from "../../../reusable/icon";

interface Props extends InventoryItem {}

export default function InventoryMedkit(props: Props) {
  const [active, setActive] = createSignal(false);

  return (
    <>
      <InventoryItemShape
        icon={<Icon src="medkit.svg" alt="medkit" />}
        content={props.title}
        onClick={() => {
          setActive(true);
        }}
      />
      <Show when={active()}>
        <PopUpOverlay
          onClick={() => {
            setActive(false);
          }}
        >
          <PopUpContainer onClick={(e) => e.stopPropagation()} class="w-full">
            <div class="space-y-4">
              <InventoryItemHeader
                title={props.title}
                description={props.description}
                onBackBtnClick={() => setActive(false)}
              />

              <PartActions>
                <InventoryButton
                  onClick={() => {
                    store.inventory.removeItemById(props.id);
                    setActive(false);
                  }}
                >
                  Remove
                </InventoryButton>
                <InventoryButton
                  onClick={() => {
                    setActive(false);
                    store.inventory.setCurrentMedkitId(props.id);

                    if (typeof props.onUse === "function") {
                      props.onUse();
                    }
                  }}
                >
                  Use
                </InventoryButton>
              </PartActions>
            </div>
          </PopUpContainer>
        </PopUpOverlay>
      </Show>
    </>
  );
}
