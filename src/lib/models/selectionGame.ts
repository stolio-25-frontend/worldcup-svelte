import { WinnerSelectedException } from '$lib/definitions/exceptions';
import { Selecting } from '$lib/definitions/selecting';
import { SelectionsRegistryCommons } from '$lib/definitions/selectionsRegistry';
import type { Selection } from '$lib/models/selection';

/**
 * SelectionGame 클래스는 월드컵 게임의 핵심 로직을 구현하는 게임 매니저 역할을 수행한다.
 */
class SelectionGame {
  /**
   * 속성, getter, setter 선언부
   */
  private _candidates: number;
  get totalCandidates(): number {
    return this._candidates;
  }

  private _currentRound: number;
  get currentRound(): number {
    return this._currentRound;
  }

  private _selections: Selection[];
  get selections(): Selection[] {
    return this._selections;
  }

  private _selectionsQueue: Selection[] = [];
  private _selectionsReservedQueue: Selection[] = [];
  private _currentCandidates: [Selection, Selection] = [SelectionsRegistryCommons.DEFAULT, SelectionsRegistryCommons.DEFAULT];
  get currentCandidates(): [Selection, Selection] {
    return this._currentCandidates;
  }

  private _winner: Selection | null = null;
  get winner(): Selection | null {
    return this._winner;
  }

  /**
   * 생성자
   */
  constructor(
    selections: Selection[],
  ) {
    let candidates = selections.length;

    if (Math.log2(candidates) % 1 !== 0) {
      throw new Error('Number of selections must be a power of 2');
    }

    this._selections = selections;

    this._candidates = candidates;
    this._currentRound = this._candidates;

    // load and shuffle queue
    for (let each of this._selections) {
      this._selectionsQueue.push(each);
    }
    this._suffleQueue();
    this._renewCurrentCandidates();
  }

  /**
   * 메서드 선언부
   */
  private _suffleQueue = () => {
    /*
     * 큐 셔플 방법으로 Fisher-Yates shuffle algorithm 사용:
     * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     */
    let currIdx = this._selectionsQueue.length;

    while (currIdx > 0) {
      let randIdx = Math.floor(Math.random() * currIdx);
      currIdx--;

      // swap elements
      [this._selectionsQueue[currIdx], this._selectionsQueue[randIdx]] = [this._selectionsQueue[randIdx], this._selectionsQueue[currIdx]];
    }
  }

  private _renewCurrentCandidates = () => {
    if (this._selectionsQueue.length < 2) {
      // Inturrupt: renewing round
      this._renewRound();
    }

    this._currentCandidates = [this._selectionsQueue.shift()!, this._selectionsQueue.shift()!];
  }

  private _renewRound = () => {
    if (this.currentRound <= 1) {
      // Inturrupt: game is over; winner is selected
      this._winner = this._currentCandidates.shift()!;
      throw new WinnerSelectedException('Game is over; winner is selected', this._winner);
    }

    this._currentRound = Math.floor(this._currentRound / 2);
    this._selectionsQueue = this._selectionsReservedQueue;
    this._selectionsReservedQueue = [];
  }

  public selectInCurrentCandidates = (selecting: Selecting) => {
    switch (selecting) {
      case Selecting.First:
        this._selectionsReservedQueue.push(this._currentCandidates[0]);
        break;
      case Selecting.Second:
        this._selectionsReservedQueue.push(this._currentCandidates[1]);
        break;
    }

    this._renewCurrentCandidates();
  }
}

export { SelectionGame };
