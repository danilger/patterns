/**
 * @pattern Interpreter (Интерпретатор)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Грамматика как дерево выражений + interpret(context).
 * В FP — tagged unions и рекурсивная функция evaluate.
 *
 * @when
 * - небольшой DSL / правила, которые удобно представить деревом
 */

const variable = (name) => ({ kind: "var", name });
const and = (left, right) => ({ kind: "and", left, right });
const or = (left, right) => ({ kind: "or", left, right });
const not = (expr) => ({ kind: "not", expr });

const interpret = (expr, context) => {
  switch (expr.kind) {
    case "var":
      return Boolean(context[expr.name]);
    case "and":
      return interpret(expr.left, context) && interpret(expr.right, context);
    case "or":
      return interpret(expr.left, context) || interpret(expr.right, context);
    case "not":
      return !interpret(expr.expr, context);
    default:
      throw new Error(`Unknown expr: ${expr.kind}`);
  }
};

// --- demo: (a AND b) OR (NOT c) ---
const expression = or(and(variable("a"), variable("b")), not(variable("c")));

console.log(interpret(expression, { a: true, b: true, c: true })); // true
console.log(interpret(expression, { a: false, b: true, c: true })); // false
console.log(interpret(expression, { a: false, b: false, c: false })); // true
