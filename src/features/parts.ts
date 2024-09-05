import { createStore } from "solid-js/store";

interface State {
  arrivingAtTheIslandActive: boolean;
  exploreTheBeachActive: boolean;
  enterTheForestActive: boolean;
  theSmallMonsterActive: boolean;
  smallMonsterRewardActive: boolean;
  followTheOldTrialActive: boolean;
  circumventTheTempleActive: boolean;
  livingStatuesActive: boolean;
  livingStatuesRewardActive: boolean;
  venomousSnakesActive: boolean;
  venomousSnakesRewardActive: boolean;
  meetingSideCharactersActive: boolean;
  theLostExplorerActive: boolean;
  theMysteriousCharacterActive: boolean;
  reachingTheProphecyChamberActive: boolean;
  confrontingTheForcesOfDarknessActive: boolean;
  discoveringTheTreasureActive: boolean;
  endingActive: boolean;
}

export class PartsStore {
  private readonly _store = createStore<State>({
    arrivingAtTheIslandActive: false,
    exploreTheBeachActive: false,
    enterTheForestActive: false,
    theSmallMonsterActive: false,
    smallMonsterRewardActive: false,
    followTheOldTrialActive: false,
    circumventTheTempleActive: false,
    livingStatuesActive: false,
    livingStatuesRewardActive: false,
    venomousSnakesActive: false,
    venomousSnakesRewardActive: false,
    meetingSideCharactersActive: false,
    theLostExplorerActive: false,
    theMysteriousCharacterActive: false,
    reachingTheProphecyChamberActive: false,
    confrontingTheForcesOfDarknessActive: false,
    discoveringTheTreasureActive: false,
    endingActive: false,
  });

  exit() {
    for (const key in this.state) {
      this.setStore(key as keyof State, false);
    }
  }

  setArrivingAtTheIslandActive(active: boolean) {
    this.setStore("arrivingAtTheIslandActive", active);
  }

  setExploreTheBeachActive(active: boolean) {
    this.setStore("exploreTheBeachActive", active);
  }

  setEnterTheForestActive(active: boolean) {
    this.setStore("enterTheForestActive", active);
  }

  setTheSmallMonsterActive(active: boolean) {
    this.setStore("theSmallMonsterActive", active);
  }

  setSmallMonsterRewardActive(active: boolean) {
    this.setStore("smallMonsterRewardActive", active);
  }

  setFollowTheOldTrialActive(active: boolean) {
    this.setStore("followTheOldTrialActive", active);
  }

  setCircumventTheTempleActive(active: boolean) {
    this.setStore("circumventTheTempleActive", active);
  }

  setLivingStatuesActive(active: boolean) {
    this.setStore("livingStatuesActive", active);
  }

  setLivingStatuesRewardActive(active: boolean) {
    this.setStore("livingStatuesRewardActive", active);
  }

  setVenomousSnakesActive(active: boolean) {
    this.setStore("venomousSnakesActive", active);
  }

  setVenomousSnakesRewardActive(active: boolean) {
    this.setStore("venomousSnakesRewardActive", active);
  }

  setMeetingSideCharactersActive(active: boolean) {
    this.setStore("meetingSideCharactersActive", active);
  }

  setTheLostExplorerActive(active: boolean) {
    this.setStore("theLostExplorerActive", active);
  }

  setTheMysteriousCharacterActive(active: boolean) {
    this.setStore("theMysteriousCharacterActive", active);
  }

  setReachingTheProphecyChamberActive(active: boolean) {
    this.setStore("reachingTheProphecyChamberActive", active);
  }

  setConfrontingTheForcesOfDarknessActive(active: boolean) {
    this.setStore("confrontingTheForcesOfDarknessActive", active);
  }

  setDiscoveringTheTreasureActive(active: boolean) {
    this.setStore("discoveringTheTreasureActive", active);
  }

  setEndingActive(active: boolean) {
    this.setStore("endingActive", active);
  }

  private setStore<K extends keyof State>(key: K, value: State[K]) {
    this._store[1](key, value);
  }

  get state(): State {
    return this._store[0];
  }
}
