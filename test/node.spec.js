const { INode } = require("../dist/interfaces");
const { NodePool } = require("../dist/node");

describe('Pool', () => {
  describe('Node Pool', () => {
    let pool;
    beforeAll(() => {
      pool = new NodePool();
    });

    test("Init node pool should not throw error", () => {
      expect(pool.currentInCache).toEqual(0);
      expect(pool.nodeCache instanceof Array).toBe(true);
      expect(pool.nodeCache.length).toEqual(0);
    });

    test("Create new state for node pool should not throw error", () => {
      pool.createNewState({ id: "lib1"}, 0);
      expect(pool.currentInCache).toEqual(1);
      expect(pool.nodeCache[0].id).toEqual('lib1');
      expect(pool.nodeCache[0].dist).toEqual(Infinity);
      expect(pool.nodeCache[0].prev).toEqual(undefined);
      expect(pool.nodeCache[0].visited).toEqual(undefined);
      expect(pool.nodeCache[0].heapIndex).toEqual(-1);
      expect(pool.nodeCache[0].score).toEqual(Infinity);
      expect(pool.nodeCache[0].heuristic).toEqual(0);
    });

    test("Should create another new state when first is been cachad", () => {
      pool.createNewState({ id: "lib2" }, 0);
      expect(pool.currentInCache).toEqual(2);
      expect(pool.nodeCache[1].id).toEqual('lib2');
      expect(pool.nodeCache[1].dist).toEqual(Infinity);
      expect(pool.nodeCache[1].prev).toEqual(undefined);
      expect(pool.nodeCache[1].visited).toEqual(undefined);
      expect(pool.nodeCache[1].heapIndex).toEqual(-1);
      expect(pool.nodeCache[1].score).toEqual(Infinity);
      expect(pool.nodeCache[1].heuristic).toEqual(0);
    });

    test("Should clean up cache", () => {
      pool.reset();
      expect(pool.currentInCache).toEqual(0);
    });

    afterAll(() => pool = null);
  });
});