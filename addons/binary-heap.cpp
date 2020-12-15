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

int BinaryHeap::FindPosition(int node) {
  int idx = 0;
  for (int i = 1; i < heap.size(); i++) {
    if (heap[i].element == node) {
      idx = i;
    }
  }
  return idx;
}

void BinaryHeap::MinHeapInsert(int node, int key) {
  heap.push_back(HeapNode(node, key));
  DecreaseKey(node, key);
}

void BinaryHeap::DecreaseKey(int node, int newKey) {
  int node_index = FindPosition(node);

  if (newKey >= heap[node_index].key) {
    std::cout << "new key is not smaller than current one\n";
    return;
  }
  heap[node_index].key = newKey;

  while (node_index > 1 && heap[GetParentNode(node_index)].key > heap[node_index].key)
  {
    swap(heap[node_index], heap[GetParentNode(node_index)]);
    node_index = GetParentNode(node_index);
  }
}

void BinaryHeap::swap(struct HeapNode &n1, struct HeapNode &n2) {
  struct HeapNode temp = n1;
  n1 = n2;
  n2 = temp;
}

int BinaryHeap::ExractMin() {
  if (IsHeapEmpty()) {
    std::cout << "error: Heap is empty\n";
    exit(-1);
  }

  int min = heap[1].element;
  heap[1] = heap[heap.size() - 1];
  heap.erase(heap.begin() + heap.size() - 1);
  MinHeapify(1, (int)heap.size());
  return min;
}

void BinaryHeap::BuildMinHeap(std::vector<int> array) {
  for (int i = 0; i < array.size(); i++) {
    heap[i + 1].element = i;
    heap[i + 1].key = array[i];
  }
  for (int i = (int)heap.size() / 2; i >= 1; i--) {
    MinHeapify(i, (int)heap.size() - 1);
  }
}

void BinaryHeap::MinHeapify(int node, int length) {
  int left = 2 * node;
  int right = 2 * node + 1;
  int smallest;

  if (left <= length && heap[left].key < heap[node].key) {
    smallest = left;
  } else {
    smallest = node;
  }

  if (right <= length && heap[right].key < heap[smallest].key) {
    smallest = right;
  }

  if (smallest != node) {
    swap(heap[smallest], heap[node]);
    MinHeapify(smallest, length);
  }
}