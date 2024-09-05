import { Accessor, createSignal, Signal } from "solid-js";

interface State {
  startTimer: number;
  readyToStart: boolean;
  started: boolean;
  ended: boolean;
  winner: string | null;
}

export interface BattleConfig {
  startTimer: number;
}

export abstract class Battle {
  protected readonly _signal: Signal<State>;

  constructor(config: BattleConfig) {
    this._signal = createSignal<State>({
      startTimer: config.startTimer,
      readyToStart: false,
      started: false,
      ended: false,
      winner: null,
    });
  }

  setStartTimer(time: number) {
    this._signal[1]((prev) => ({ ...prev, startTimer: time }));
  }

  setReadyToStart(ready: boolean) {
    this._signal[1]((prev) => ({ ...prev, readyToStart: ready }));
  }

  setStarted(started: boolean) {
    this._signal[1]((prev) => ({ ...prev, started }));
  }

  setEnded(ended: boolean) {
    this._signal[1]((prev) => ({ ...prev, ended }));
  }

  setWinner(winner: string | null) {
    this._signal[1]((prev) => ({ ...prev, winner }));
  }

  get state(): Accessor<State> {
    return this._signal[0];
  }
}
