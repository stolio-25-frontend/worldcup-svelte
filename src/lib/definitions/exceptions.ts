import type { Selection } from '$lib/models/selection';

class WinnerSelectedException extends Error {
  public readonly winner: Selection | undefined;
  constructor(message: string, winner?: Selection) {
    super(message);
    this.name = 'WinnerSelectedException';
    this.winner = winner;
  }
}

export { WinnerSelectedException };
