/**
 * @pattern Repository
 * @area Backend / NestJS
 * @sources Nest best practices (thin services ↔ data access separation)
 *
 * @description
 * Слой доступа к данным. Service знает бизнес-правила, Repository — как
 * читать/писать БД (TypeORM/Prisma/SQL). Упрощает тесты и смену ORM.
 *
 * @when есть персистентность; не тащи QueryBuilder в controller
 */

class UsersRepository {
  constructor() {
    this.rows = new Map([[1, { id: 1, email: "a@b.c" }]]);
  }
  findById(id) {
    return this.rows.get(id) ?? null;
  }
  save(user) {
    this.rows.set(user.id, user);
    return user;
  }
}

class UsersService {
  constructor(repo) {
    this.repo = repo;
  }
  rename(id, email) {
    const user = this.repo.findById(id);
    if (!user) throw new Error("Not found");
    return this.repo.save({ ...user, email });
  }
}

// --- demo ---
const service = new UsersService(new UsersRepository());
console.log(service.rename(1, "new@b.c"));

/** @example NestJS */
/*
@Injectable()
export class UsersRepository {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  findById(id: number) { return this.repo.findOneBy({ id }); }
}
*/
