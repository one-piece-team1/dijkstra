#include <cmath>
#include <iomanip>
#include <iostream>
#include <list>
#include <utility>
#include <vector>

using std::cout;
using std::endl;

struct HeapNode {
  /* data */
  int key, element;
  HeapNode() : key(0), element(0){};
  HeapNode(int key, int element) : key(key), element(element){};
};

class BinaryHeap {
private:
  /* data */
  std::vector<HeapNode> heap;
  void swap(struct HeapNode &p1, struct HeapNode &p2);
  int FindPosition(int node);
  int GetParentNode(int node) { return std::floor(node / 2); }

public:
  BinaryHeap() { heap.resize(1); }
  BinaryHeap(int n) { heap.resize(n + 1); }
  void MinHeapify(int node, int length);
  void BuildMinHeap(std::vector<int> array);
  void DecreaseKey(int node, int newKey);
  void MinHeapInsert(int node, int key);
  int ExractMin();
  int Minimum() { return heap[1].element; }
  bool IsHeapEmpty() { return (heap.size() <= 1); }
};

BinaryHeap::BinaryHeap(/* args */) {}

BinaryHeap::~BinaryHeap() {}
