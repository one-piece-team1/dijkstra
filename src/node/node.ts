import { INode } from '../interfaces';

class Node implements INode.IChild {
  public id: string = '';
  public dist: number;
  public prev: any;
  public visited: any;
  public opened: Boolean;
  public heapIndex: number;
  public score: number;
  public heuristic: any;

  constructor(node, heuristic) {
    this.id = node.id;
    this.dist = node.dist !== undefined ? node.dist : Infinity;
    this.prev = undefined;
    this.visited = undefined;
    this.opened = false; // whether has been put in queue
    this.heapIndex = -1;
    this.score = Infinity;
    this.heuristic = heuristic;
  }
}

export class NodePool {
  public currentInCache: number;
  public nodeCache: any[];

  constructor() {
    this.currentInCache = 0;
    this.nodeCache = [];
  }

  reset(): void {
    this.currentInCache = 0;
  }

  createNewState(node: INode.INewState, heuristic: number): INode.IChild {
    let cached: INode.IChild = this.nodeCache[this.currentInCache];
    if (cached) {
      cached.id = node.id;
      cached.dist = node.dist !== undefined ? node.dist : Infinity;
      cached.prev = undefined;
      cached.visited = undefined;
      cached.opened = false;
      cached.heapIndex = -1;
      cached.score = Infinity;
      cached.heuristic = heuristic;
    } else {
      cached = new Node(node, heuristic);
      this.nodeCache[this.currentInCache] = cached;
    }
    this.currentInCache++;
    return cached;
  }
}
