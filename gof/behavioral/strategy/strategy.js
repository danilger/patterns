/**
 * @pattern Strategy (Стратегия)
 * @category Behavioral
 *
 * @description
 * Семейство взаимозаменяемых алгоритмов. Context делегирует работу
 * текущей Strategy; алгоритм можно сменить в runtime.
 *
 * @todo Реализация ниже
 */

class SortStrategy {
  sort(data) {
    throw new Error("sort() must be implemented");
  }
}

class BubbleSort extends SortStrategy {
  sort(data) {
    const arr = [...data];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
}

class BuiltInSort extends SortStrategy {
  sort(data) {
    return [...data].sort((a, b) => a - b);
  }
}

class ReverseSort extends SortStrategy {
  sort(data) {
    return [...data].sort((a, b) => b - a);
  }
}

/** Context */
class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(data) {
    return this.strategy.sort(data);
  }
}

// --- demo ---
const data = [5, 2, 9, 1, 7];
const sorter = new Sorter(new BubbleSort());

console.log("bubble:", sorter.sort(data));

sorter.setStrategy(new BuiltInSort());
console.log("builtin:", sorter.sort(data));

sorter.setStrategy(new ReverseSort());
console.log("reverse:", sorter.sort(data));
