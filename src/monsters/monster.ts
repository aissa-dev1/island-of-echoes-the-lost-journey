import { Accessor, createSignal } from "solid-js";
import { PlayerStore } from "../features/player";

export interface MonsterConfig {
  name: string;
  health: number;
  damage: number;
  attackSpeed: number;
}

export abstract class Monster {
  private _damage: number;
  protected readonly _healthSignal = createSignal<number>(0);
  readonly name: string;
  readonly attackSpeed: number;

  constructor(config: MonsterConfig) {
    this.setHealth(config.health);
    this.name = config.name;
    this._damage = config.damage;
    this.attackSpeed = config.attackSpeed;
  }

  attack(player: PlayerStore) {
    player.removeFromHealth(this.damage);
  }

  setHealth(health: number) {
    this._healthSignal[1](health);
  }

  addToHealth(amount: number) {
    this._healthSignal[1]((prev) => prev + amount);
  }

  removeFromHealth(amount: number) {
    this._healthSignal[1]((prev) => prev - amount);
  }

  alive(): boolean {
    return this.health() > 0;
  }

  setDamage(damage: number) {
    this._damage = damage;
  }

  get damage(): number {
    return this._damage;
  }

  get health(): Accessor<number> {
    return this._healthSignal[0];
  }
}
