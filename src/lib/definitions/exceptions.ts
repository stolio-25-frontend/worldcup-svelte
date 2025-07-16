import type { Selection } from '$lib/models/selection';

/**
 * 예외를 발생시키면 예외 처리 흐름(try-catch)이 존재할 때까지,
 * 호출 스택을 거슬러 올라가면서 예외를 전달함.
 * 
 * 다시 말해 게임 종료 조건에 도달하였을 때, 다음의 예외를 발생시키면
 * 여러 단계에 걸쳐 깊게 중첩된 함수 호출 흐름을 모두 중단시킬 수 있음.
 */
class WinnerSelectedException extends Error {
  public readonly winner: Selection | undefined;
  
  constructor(message: string, winner?: Selection) {
    super(message);
    this.name = 'WinnerSelectedException';
    this.winner = winner;
  }
}

export { WinnerSelectedException };
