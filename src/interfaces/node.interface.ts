export interface INewState {
  id: string;
  dist?: number;
}

export interface IChild {
  id: string;
  dist: number;
  prev: any;
  visited: any;
  opened: Boolean;
  heapIndex: number;
  score: number;
  heuristic: number;
}
