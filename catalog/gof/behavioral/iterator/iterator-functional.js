/**
 * @pattern Iterator (Итератор)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Последовательный доступ к элементам без раскрытия структуры.
 * В FP — генераторы и нативный Symbol.iterator.
 *
 * @when
 * - нужно обойти коллекцию единообразно, скрыв внутренности
 */

const createWordsCollection = (items = []) => {
  const list = [...items];

  return {
    add: (item) => list.push(item),
    /** Классический итератор через замыкание */
    createIterator: () => {
      let index = 0;
      return {
        hasNext: () => index < list.length,
        next: () => list[index++],
      };
    },
    /** Нативный JS-итератор */
    [Symbol.iterator]: function* () {
      yield* list;
    },
  };
};

// --- demo ---
const words = createWordsCollection();
words.add("first");
words.add("second");
words.add("third");

const iterator = words.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}

console.log([...words]);
