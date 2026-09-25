/**
 * @pattern Memento (Хранитель)
 * @category Behavioral
 *
 * @description
 * Сохраняет снимок внутреннего состояния объекта, чтобы потом
 * восстановить его, не нарушая инкапсуляцию.
 *
 * @todo Реализация ниже
 */

/** Memento — снимок; Caretaker не читает поля */
class EditorMemento {
  constructor(text, cursor) {
    this._text = text;
    this._cursor = cursor;
  }

  getState() {
    return { text: this._text, cursor: this._cursor };
  }
}

/** Originator */
class Editor {
  constructor() {
    this.text = "";
    this.cursor = 0;
  }

  type(chars) {
    this.text =
      this.text.slice(0, this.cursor) + chars + this.text.slice(this.cursor);
    this.cursor += chars.length;
  }

  moveCursor(pos) {
    this.cursor = Math.max(0, Math.min(this.text.length, pos));
  }

  save() {
    return new EditorMemento(this.text, this.cursor);
  }

  restore(memento) {
    const state = memento.getState();
    this.text = state.text;
    this.cursor = state.cursor;
  }

  describe() {
    return `text="${this.text}" cursor=${this.cursor}`;
  }
}

/** Caretaker — хранит историю снимков */
class History {
  constructor() {
    this.stack = [];
  }

  push(memento) {
    this.stack.push(memento);
  }

  pop() {
    return this.stack.pop();
  }
}

// --- demo ---
const editor = new Editor();
const history = new History();

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
