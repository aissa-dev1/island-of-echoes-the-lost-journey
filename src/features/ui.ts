import { createStore } from "solid-js/store";

interface State {
  inventoryActive: boolean;
  mysteriousChestActive: boolean;
  medkitActive: boolean;
}

export class UIStore {
  private readonly _store = createStore<State>({
    inventoryActive: false,
    mysteriousChestActive: false,
    medkitActive: false,
  });

  setInventoryActive(active: boolean) {
    this.setStore("inventoryActive", active);
  }

  setMysteriousChestActive(active: boolean) {
    this.setStore("mysteriousChestActive", active);
  }

  setMedkitActive(active: boolean) {
    this.setStore("medkitActive", active);
  }

  private setStore<K extends keyof State>(key: K, value: State[K]) {
    this._store[1](key, value);
  }

  get state(): State {
    return this._store[0];
  }
}
