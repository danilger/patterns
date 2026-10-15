/**
 * @pattern Strategy (Стратегия)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Семейство взаимозаменяемых алгоритмов. В FP стратегия —
 * обычная функция; context держит ссылку и может сменить её.
 *
 * @when
 * - несколько вариантов одной операции, смена в runtime
 */

const bubbleSort = (data) => {
  const arr = [...data];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const builtInSort = (data) => [...data].sort((a, b) => a - b);
const reverseSort = (data) => [...data].sort((a, b) => b - a);

const createSorter = (strategy) => {
  let current = strategy;
  return {
    setStrategy: (strategy) => {
      current = strategy;
    },
    sort: (data) => current(data),
  };
};

// --- demo ---
const data = [5, 2, 9, 1, 7];
const sorter = createSorter(bubbleSort);

console.log("bubble:", sorter.sort(data));

sorter.setStrategy(builtInSort);
console.log("builtin:", sorter.sort(data));

sorter.setStrategy(reverseSort);
console.log("reverse:", sorter.sort(data));
