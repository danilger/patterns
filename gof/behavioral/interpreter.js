/**
 * @pattern Interpreter (Интерпретатор)
 * @category Behavioral
 *
 * @description
 * Для простого языка задаёт грамматику как дерево выражений
 * и интерпретирует предложения через interpret(context).
 *
 * Пример: булевы выражения с переменными — "a AND b", "NOT a".
 *
 * @todo Реализация ниже
 */

class Expression {
  interpret(context) {
    throw new Error("interpret() must be implemented");
  }
}

class Variable extends Expression {
  constructor(name) {
    super();
    this.name = name;
  }
  interpret(context) {
    return Boolean(context[this.name]);
  }
}

class And extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  interpret(context) {
    return this.left.interpret(context) && this.right.interpret(context);
  }
}

class Or extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  interpret(context) {
    return this.left.interpret(context) || this.right.interpret(context);
  }
}

class Not extends Expression {
  constructor(expr) {
    super();
    this.expr = expr;
  }
  interpret(context) {
    return !this.expr.interpret(context);
  }
}

// --- demo: (a AND b) OR (NOT c) ---
const expression = new Or(
  new And(new Variable("a"), new Variable("b")),
  new Not(new Variable("c"))
);

console.log(expression.interpret({ a: true, b: true, c: true })); // true
console.log(expression.interpret({ a: false, b: true, c: true })); // false
console.log(expression.interpret({ a: false, b: false, c: false })); // true
