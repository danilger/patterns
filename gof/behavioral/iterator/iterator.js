/**
 * @pattern Iterator (Итератор)
 * @category Behavioral
 *
 * @description
 * Даёт последовательный доступ к элементам коллекции без раскрытия
 * её внутреннего устройства.
 *
 * @todo Реализация ниже
 */

class Iterator {
  hasNext() {
    throw new Error("hasNext() must be implemented");
  }
  next() {
    throw new Error("next() must be implemented");
  }
}

class ArrayIterator extends Iterator {
  constructor(items) {
    super();
    this.items = items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    return this.items[this.index++];
  }
}

class WordsCollection {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  createIterator() {
    return new ArrayIterator(this.items);
  }

  /** Нативный JS-итератор для for...of */
  [Symbol.iterator]() {
    return this.items[Symbol.iterator]();
  }
}

// --- demo ---
const words = new WordsCollection();
words.add("first");
words.add("second");
words.add("third");

const iterator = words.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}

console.log([...words]);
