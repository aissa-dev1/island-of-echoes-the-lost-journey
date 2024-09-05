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

export default function InventoryChest(props: Props) {
  const [active, setActive] = createSignal(false);

  return (
    <>
      <InventoryItemShape
        icon={
          <>
            <div class="absolute top-1 right-1">
              <Show
                when={props.locked}
                fallback={
                  <Icon class="size-5" src="lock-off.svg" alt="lock-off" />
                }
              >
                <Icon class="size-5" src="lock.svg" alt="lock" />
              </Show>
            </div>
            <Icon src="chest.svg" alt="chest" />
          </>
        }
        content={props.title}
        onClick={() => {
          if (props.locked) return;

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

                    if (typeof props.onUse === "function") {
                      props.onUse();
                    }
                  }}
                >
                  Open
                </InventoryButton>
              </PartActions>
            </div>
          </PopUpContainer>
        </PopUpOverlay>
      </Show>
    </>
  );
}
