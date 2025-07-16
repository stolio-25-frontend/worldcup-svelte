/**
 * Selecting 열거형
 * 
 * 게임 상에서 좌/우 항목을 선택했을 때, 선택한 항목을 지칭하기 위해 사용됨.
 * 이와 같이 열거형으로 선언하여 타입으로 사용하면, 아래의 두 항목 외의 비정상 값ㅇ
 * 투입될 가능성을 줄일 수 있으므로 효과적임.
 */
enum Selecting {
  First = 'first',
  Second = 'second',
}

export { Selecting };
