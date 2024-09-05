import { For, Show } from "solid-js";
import { InventoryItem, InventoryItemType } from "../../../features/inventory";
import InventoryMonster from "./items/monster";
import InventoryManuscript from "./items/manuscript";
import InventoryChest from "./items/chest";
import InventoryMap from "./items/map";
import InventoryMedkit from "./items/medkit";

interface Props {
  list: InventoryItem[];
}

export default function InventoryList(props: Props) {
  return (
    <div
      classList={{
        "grid grid-cols-2 gap-3 max-h-full overflow-y-auto md:grid-cols-4 lg:grid-cols-5":
          props.list.length > 0,
      }}
    >
      <Show
        when={props.list.length > 0}
        fallback={
          <p class="text-lg font-medium text-center">Inventory is empty</p>
        }
      >
        <For each={props.list}>
          {(item) => {
            switch (item.type) {
              case InventoryItemType.Manuscript:
                return <InventoryManuscript {...item} />;

              case InventoryItemType.Monster:
                return <InventoryMonster {...item} />;

              case InventoryItemType.Chest:
                return <InventoryChest {...item} />;

              case InventoryItemType.Map:
                return <InventoryMap {...item} />;

              case InventoryItemType.Medkit:
                return <InventoryMedkit {...item} />;
            }
          }}
        </For>
      </Show>
    </div>
  );
}
