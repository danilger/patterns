/**
 * @pattern Memento (Хранитель)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Снимок состояния для последующего восстановления.
 * В FP — иммутабельные снимки + стек истории снаружи.
 *
 * @when
 * - undo/redo без раскрытия внутренних полей наружу
 */

const createEditor = (initial = { text: "", cursor: 0 }) => {
  let state = { ...initial };

  return {
    type: (chars) => {
      const { text, cursor } = state;
      state = {
        text: text.slice(0, cursor) + chars + text.slice(cursor),
        cursor: cursor + chars.length,
      };
    },
    moveCursor: (pos) => {
      state = {
        ...state,
        cursor: Math.max(0, Math.min(state.text.length, pos)),
      };
    },
    save: () => ({ ...state }),
    restore: (memento) => {
      state = { ...memento };
    },
    describe: () => `text="${state.text}" cursor=${state.cursor}`,
  };
};

const createHistory = () => {
  const stack = [];
  return {
    push: (memento) => stack.push(memento),
    pop: () => stack.pop(),
  };
};

// --- demo ---
const editor = createEditor();
const history = createHistory();

editor.type("Hello");
history.push(editor.save());

editor.type(" World");
history.push(editor.save());

editor.type("!");
console.log(editor.describe());

editor.restore(history.pop());
console.log("undo:", editor.describe());

editor.restore(history.pop());
console.log("undo:", editor.describe());
