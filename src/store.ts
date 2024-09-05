import { Inventory } from "./features/inventory";
import { PartsStore } from "./features/parts";
import { PlayerStore } from "./features/player";
import { UIStore } from "./features/ui";

class Store {
  readonly parts = new PartsStore();
  readonly player = new PlayerStore();
  readonly inventory = new Inventory();
  readonly ui = new UIStore();
}

export const store = new Store();
