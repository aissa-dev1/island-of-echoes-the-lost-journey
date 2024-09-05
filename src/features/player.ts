import { createStore } from "solid-js/store";

interface State {
  name: string;
  health: number;
  maxHealth: number;
  damage: number;
}

export class PlayerStore {
  private readonly _store = createStore<State>({
    name: "Player",
    health: 100,
    maxHealth: 100,
    damage: 5,
  });

  changeName(name: string) {
    this.setStore("name", name ? name : "Player");
  }

  setHealth(health: number) {
    this.setStore("health", health);
  }

  addToHealth(amount: number) {
    this.setStore("health", this.state.health + amount);
  }

  removeFromHealth(amount: number) {
    this.setStore("health", this.state.health - amount);
  }

  setDamage(damage: number) {
    this.setStore("damage", damage);
  }

  addToDamage(amount: number) {
    this.setStore("damage", this.state.damage + amount);
  }

  removeFromDamage(amount: number) {
    this.setStore("damage", this.state.damage - amount);
  }

  alive(): boolean {
    return this.state.health > 0;
  }

  private setStore<K extends keyof State>(key: K, value: State[K]) {
    this._store[1](key, value);
  }

  get state(): State {
    return this._store[0];
  }
}
