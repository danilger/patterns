/**
 * Что в JS/TS уже «в языке» (и зачем GoF не всегда нужен)
 * ---------------------------------------------------------
 * @area Meta / JavaScript
 * @sources Addy Osmani — Learning JavaScript Design Patterns;
 *          Lydia Hallie & Addy Osmani — patterns.dev
 *
 * Многие классические GoF-паттерны в современном JS частично или полностью
 * покрыты языком и платформой — их не нужно реализовывать «как в книге».
 */

console.log(`
Module          → ES modules (import/export), Nest @Module
Singleton       → module scope (один экземпляр на модуль)
Observer        → EventTarget, EventEmitter, RxJS, Nest events
Iterator        → Symbol.iterator, for...of, async iterators
Prototype       → Object.create, class extends, prototype chain
Proxy           → global Proxy
Decorator       → TC39 decorators / Nest decorators (метаданные)
Factory         → функции-фабрики, Nest providers useFactory
Strategy        → передача функции/класса как зависимости (DI)
Chain           → Nest middleware → guards → pipes → interceptor → filter

Вывод: учи GoF как словарь, а на практике бери идиомы React/Nest/JS.
Patterns.dev и Osmani как раз про этот сдвиг — от «классики» к rendering,
performance и framework patterns.
`);
