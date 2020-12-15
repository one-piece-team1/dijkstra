#include "binary-heap.h"
#include <cmath>
#include <iomanip>
#include <iostream>
#include <list>
#include <utility>
#include <vector>

using std::cout;
using std::endl;

struct HeapNode;

template <class T>
BinaryHeap<T>::BinaryHeap();

template <class T>
int BinaryHeap<T>::FindPosition(int node) {
  int idx = 0;
  for (int i = 1; i < heap.size(); i++) {
    if (heap[i].element == node) {
      idx = i;
    }
  }
  return idx;
}

template <class T>
void BinaryHeap<T>::MinHeapInsert(int node, int key) {
  heap.push_back(HeapNode(node, key));
  DecreaseKey(node, key);
}

template <class T>
void BinaryHeap<T>::DecreaseKey(int node, int newKey) {
  int node_index = FindPosition(node);

  if (newKey >= heap[node_index].key) {
    std::cout << "new key is not smaller than current one\n";
    return;
  }
  heap[node_index].key = newKey;

  while (node_index > 1 &&
         heap[GetParentNode(node_index)].key > heap[node_index].key) {
    swap(heap[node_index], heap[GetParentNode(node_index)]);
    node_index = GetParentNode(node_index);
  }
}

template <class T>
void BinaryHeap<T>::swap(struct HeapNode &n1, struct HeapNode &n2) {
  struct HeapNode temp = n1;
  n1 = n2;
  n2 = temp;
}

template <class T>
int BinaryHeap<T>::ExractMin() {
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

template <class T>
void BinaryHeap<T>::BuildMinHeap(std::vector<int> array) {
  for (int i = 0; i < array.size(); i++) {
    heap[i + 1].element = i;
    heap[i + 1].key = array[i];
  }
  for (int i = (int)heap.size() / 2; i >= 1; i--) {
    MinHeapify(i, (int)heap.size() - 1);
  }
}

template <class T>
void BinaryHeap<T>::MinHeapify(int node, int length) {
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