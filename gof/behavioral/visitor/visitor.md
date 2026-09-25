# Visitor (Посетитель)

**Область:** Behavioral / GoF

---

## Смысл паттерна

**Visitor** добавляет **новые операции** над объектами иерархии **без изменения классов элементов**. Каждый `Element` принимает visitor через `accept(visitor)`; visitor содержит методы `visitConcreteElement()` для каждого типа.

Double dispatch: тип элемента + тип visitor определяют, какая операция выполнится.

```
element.accept(visitor) → visitor.visitXxx(element)
```

Удобно, когда **структура стабильна**, а **операций над ней много** (export, validate, render, serialize).

---

## Как устроено демо

В `visitor.js` — **геометрические фигуры**:

| Роль | Класс |
|------|-------|
| Element | `Shape` с `accept(visitor)` |
| Concrete elements | `Circle`, `Rectangle` |
| Visitor | `ShapeVisitor` — `visitCircle`, `visitRectangle` |
| Операции | `AreaVisitor` (площадь), `XmlExportVisitor` (XML-строка) |

Массив `[Circle(10), Rectangle(4,5), Circle(2)]` обходится в цикле:

```js
shape.accept(area)  // πr² или w×h
shape.accept(xml)   // `<circle … />` или `<rectangle … />`
```

Новая операция = новый Visitor; классы `Circle`/`Rectangle` не трогаются.

---

## Когда применять

- Стабильная **иерархия типов** (AST, DOM, document model, scene graph).
- Часто добавляются **новые операции** (pretty-print, lint, compile, metrics).
- Операция должна **агрегировать** данные по разным типам по-разному.

**Не стоит**, если:

- иерархия **часто меняется** — каждый новый тип ломает все Visitor'ы;
- операций мало — проще методы на самих элементах или polymorphic dispatch в языке;
- элементы уже раздуваются от десятков `visit*` — признак неудачного применения.

---

## Связь с другими паттернами

| Паттерн | Отличие |
|---------|---------|
| **Interpreter** | Новые *конструкции языка*; Visitor — новые *операции* над узлами |
| **Strategy** | Одна операция на выбор; Visitor — *набор* типоспецифичных visit-методов |
| **Composite** | Дерево элементов; Visitor часто обходит Composite |
| **Open/Closed** | Visitor — классический trade-off: открыт для операций, закрыт для новых типов |

---

## Краткий итог

Visitor = **вынести операции из иерархии элементов** в отдельные visitor-классы. `accept` делегирует в нужный `visit*`. В демо одни и те же фигуры считают площадь и экспортируют XML через два visitor'а без правки `Circle` и `Rectangle`.
