const { NodeHeap } = require('../dist/index');

describe('NodeHeap', () => {
  describe('NodeHeap Init', () => {
    test('Should be able to init without error', () => {
      const nodeheap = new NodeHeap({
        compare(a, b) {
          return a - b;
        },
      });
      expect(nodeheap.data instanceof Array).toBe(true);
      expect(nodeheap.length).toEqual(0);
      expect(nodeheap.compare instanceof Function).toBe(true);
    });

    test('Should throw Error when provide wrond args', () => {
      expect(() => {
        new NodeHeap({});
      }).toThrow('NodeHeap Init Error: Please supply a comparison function to NodeHeap');
    });
  });

  describe('NodeHeap Queue Operation', () => {
    const nodeheap = new NodeHeap({
      compare(a, b) {
        return a - b;
      },
    });

    test('Should return new Data after pushing it', () => {
      nodeheap.push({
        id: '-98.6572265625,44.4808302785626',
        dist: Infinity,
        prev: undefined,
        visited: undefined,
        opened: false,
        heapIndex: -1,
        score: Infinity,
        heuristic: 0,
      });
      // verify 2 is enough
      expect(nodeheap.data[0].id).toEqual('-98.6572265625,44.4808302785626');
      expect(nodeheap.data[0].heapIndex).toEqual(0);
      expect(nodeheap.length).toEqual(1);
    });

    test("Should return first element of the node", () => {
      const node = nodeheap.peek();
      expect(nodeheap.data[0].id).toEqual('-98.6572265625,44.4808302785626');
      expect(nodeheap.data[0].heapIndex).toEqual(0);
      expect(nodeheap.length).toEqual(1);
    });

    test("Should remain nothing in queue after pop", () => {
        nodeheap.pop();
        expect(nodeheap.data instanceof Array).toBe(true);
        expect(nodeheap.length).toEqual(0);
        expect(nodeheap.compare instanceof Function).toBe(true);
      });
  });
});
