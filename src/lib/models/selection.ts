/**
 * Selection 데이터 모델
 * 
 * 월드컵 게임의 각 선택 항목이 가질 데이터의 구조를 정의
 */
type Selection = {
  id: string;
  name: string;
  description?: string;
  imagePath?: string;
};

export type { Selection };
