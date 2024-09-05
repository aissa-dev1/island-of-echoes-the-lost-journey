import {
  InventoryItemType,
  InventoryItemWithoutId,
} from "./features/inventory";
import { store } from "./store";

export function initHiManuscript() {
  const hi: InventoryItemWithoutId = {
    type: InventoryItemType.Manuscript,
    title: "Hi",
    description: "Is anyone here? I need help something wrong is going on...",
  };

  for (const item of store.inventory.state.list) {
    if (
      item.type === hi.type &&
      item.title === hi.title &&
      item.description === hi.description
    ) {
      return;
    }
  }

  store.inventory.addItem(hi);
}
