import { createUniqueId } from "solid-js";
import { createStore } from "solid-js/store";

export enum InventoryItemType {
  Manuscript,
  Monster,
  Chest,
  Map,
  Medkit,
}

export type InventoryItem = {
  id: string;
  type: InventoryItemType;
  title: string;
  description: string;
  value?: number;
  locked?: boolean;
  onUse?: () => void;
};

export type InventoryItemWithoutId = Omit<InventoryItem, "id">;

interface State {
  list: InventoryItem[];
  currentMedkitId: string | null;
}

export class Inventory {
  private readonly _store = createStore<State>({
    list: [],
    currentMedkitId: null,
  });

  update(list: InventoryItem[]) {
    this.setStore("list", list);
  }

  addItem(item: InventoryItemWithoutId) {
    this.setStore("list", [
      ...this.state.list,
      {
        id: createUniqueId(),
        ...item,
      },
    ]);
  }

  removeItemById(id: string) {
    this.setStore(
      "list",
      [...this.state.list].filter((item) => item.id !== id)
    );
  }

  removeItemByTitle(title: string) {
    this.setStore(
      "list",
      [...this.state.list].filter(
        (item) => item.title.toLowerCase() !== title.toLowerCase()
      )
    );
  }

  findById(id: string): InventoryItem | null {
    let item = null;

    for (let i = 0; i < this.state.list.length; i++) {
      const current = this.state.list[i];

      if (current.id !== id) continue;

      item = current;
    }

    return item;
  }

  hasById(id: string): boolean {
    let found = false;

    for (let i = 0; i < this.state.list.length; i++) {
      const item = this.state.list[i];

      if (item.id !== id) continue;

      found = true;
    }

    return found;
  }

  hasByTitle(title: string): boolean {
    let found = false;

    for (let i = 0; i < this.state.list.length; i++) {
      const item = this.state.list[i];

      if (item.title.toLowerCase() !== title.toLowerCase()) continue;

      found = true;
    }

    return found;
  }

  clear() {
    this.setStore("list", []);
  }

  setCurrentMedkitId(id: string | null) {
    this.setStore("currentMedkitId", id);
  }

  private setStore<K extends keyof State>(key: K, value: State[K]) {
    this._store[1](key, value);
  }

  get state(): State {
    return this._store[0];
  }
}
