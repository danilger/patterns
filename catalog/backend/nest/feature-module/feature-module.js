/**
 * @pattern Feature Module
 * @area Backend / NestJS
 * @sources NestJS docs; Nest modular architecture best practices
 *
 * @description
 * Nest строится из модулей. Feature module группирует controller + service +
 * providers одной доменной области (Users, Orders). Это Module pattern языка
 * + явные границы DI.
 *
 * @when любой Nest-проект; один модуль ≈ одна фича/bounded context
 */

function createModule({ name, providers = [], controllers = [], exports = [] }) {
  return { name, providers, controllers, exports };
}

const usersService = { findAll: () => [{ id: 1, name: "Ann" }] };
const usersController = {
  list() {
    return usersService.findAll();
  },
};

const UsersModule = createModule({
  name: "UsersModule",
  providers: [usersService],
  controllers: [usersController],
  exports: [usersService],
});

// --- demo ---
console.log(UsersModule.name, UsersModule.controllers[0].list());

/** @example NestJS */
/*
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
*/
