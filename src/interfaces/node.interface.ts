export interface INewState {
  id: string;
  dist?: number;
}

export interface IChild {
  id: string;
  dist: number;
  prev: any;
  visited: any;
  opened: boolean;
  heapIndex: number;
  score: number;
  heuristic: number;
}
