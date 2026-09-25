# Repository

**Область:** Backend / NestJS

**Источники:** Nest best practices (thin services ↔ data access separation)

## Смысл паттерна

**Repository** инкапсулирует **доступ к данным**: find, save, delete — как in-memory Map, так и TypeORM, Prisma, raw SQL. **Service** знает бизнес-правила («нельзя переименовать удалённого user»); **repository** — *как* прочитать/записать строку.

Controller не должен видеть QueryBuilder. Service не должен размазывать SQL по use-case. Тесты подменяют repository fake-реализацией без БД.

В Nest часто `@Injectable()` класс-обёртка над `@InjectRepository(Entity)` или PrismaService.

## Как устроено демо

Файл `repository.js`:

1. **`UsersRepository`** — in-memory `Map`: `findById(id)`, `save(user)`.
2. **`UsersService`** — принимает repo в конструктор; `rename(id, email)` — find → проверка → save.
3. При отсутствии user — `throw new Error("Not found")`.

Демо: `new UsersService(new UsersRepository()).rename(1, "new@b.c")` — обновлённый user с новым email.

В Nest:

```typescript
@Injectable()
export class UsersRepository {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  findById(id: number) { return this.repo.findOneBy({ id }); }
}
```

## Когда применять

- Любая **персистентность** (PostgreSQL, MongoDB).
- Нужны unit-тесты service без testcontainers.
- Планируется смена ORM или split read/write stores.
- Сложные запросы изолированы в repository, не в controller.

Для простого CRUD один `@InjectRepository` в service допустим в маленьких проектах; при росте — выделите repository.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **Repository (DDD)** | Коллекция-like API поверх persistence. |
| **Adapter** | Repository — адаптер домена к storage. |
| **Dependency Injection** | Repository inject в service; mock в тестах. |
| **Thin Controller** | Controller → Service → Repository, не → DB. |
| **CQRS** | Write repository и read model могут различаться. |

GoF «Repository» не формализует; паттерн из **Enterprise Application Architecture**.

## Краткий итог

Service = правила, Repository = данные. Меняете Prisma на TypeORM — правите adapter/repository, не десять сервисов.
