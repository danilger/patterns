# Feature Module

**Область:** Backend / NestJS

**Источники:** NestJS docs; Nest modular architecture best practices

## Смысл паттерна

Nest-приложение собирается из **модулей** (`@Module`). **Feature module** группирует всё, что относится к одной **доменной области** или **bounded context**: controllers, services, repositories, guards — для Users, Orders, Billing и т.д.

Модуль задаёт **границы DI**: что видно только внутри, что **exports** для других модулей. `AppModule` импортирует feature modules и не раздувается сам.

Это **Module pattern** языка + явная архитектура вместо одной папки «всё в кучу».

## Как устроено демо

Файл `feature-module.js`:

1. **`createModule({ name, providers, controllers, exports })`** — упрощённая структура Nest `@Module`.
2. **`usersService`** — provider с `findAll()`.
3. **`usersController`** — делегирует `list()` в service.
4. **`UsersModule`** — связывает name, providers, controllers, exports.

Демо: `UsersModule.name` и `UsersModule.controllers[0].list()` → `[{ id: 1, name: "Ann" }]`.

В Nest:

```typescript
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
```

## Когда применять

- **Любой** Nest-проект больше hello-world.
- Одна фича ≈ один модуль (UsersModule, OrdersModule).
- Нужны чёткие public API между командами (exports only what needed).
- Lazy loading, micro-monolith с границами до split на сервисы.

`SharedModule`, `CoreModule`, `InfrastructureModule` — composition root, не смешивайте домены в одном module.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **Module (JS/TS)** | Инкапсуляция и явный public interface через exports. |
| **Dependency Injection** | Providers регистрируются в scope модуля. |
| **Thin Controller** | Controller и service живут в одном feature module. |
| **Adapter / Repository** | Infrastructure providers часто в submodule или imports. |
| **Config Module** | `ConfigModule.forRoot({ isGlobal: true })` — cross-cutting module. |

GoF Facade здесь вторичен; важнее **modular monolith** и DDD bounded context.

## Краткий итог

Feature module = одна фича, один `@Module`, явные providers и exports. Масштабируйте приложение добавлением модулей, а не файлов в root.
