/**
 * @pattern DTO + Validation (Pipe)
 * @area Backend / NestJS
 * @sources NestJS Pipes + class-validator; API boundary best practices
 *
 * @description
 * DTO — контракт входа/выхода API, отдельно от Entity.
 * ValidationPipe (+ class-validator) отсекает мусор на границе.
 * Pipe ≈ Chain of Responsibility на request pipeline.
 *
 * @when все публичные endpoints; никогда не принимай «сырой» body в service
 */

function validateCreateUser(input) {
  const errors = [];
  if (!input?.email || !String(input.email).includes("@")) {
    errors.push("email invalid");
  }
  if (!input?.password || String(input.password).length < 8) {
    errors.push("password min 8");
  }
  if (errors.length) {
    const err = new Error(errors.join(", "));
    err.status = 400;
    throw err;
  }
  return { email: input.email, password: input.password };
}

// --- demo ---
try {
  console.log(validateCreateUser({ email: "bad", password: "123" }));
} catch (e) {
  console.log(e.status, e.message);
}
console.log(validateCreateUser({ email: "a@b.c", password: "secret123" }));

/** @example NestJS */
/*
export class CreateUserDto {
  @IsEmail() email: string;
  @MinLength(8) password: string;
}

@Post()
create(@Body() dto: CreateUserDto) { return this.users.create(dto); }
// + app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
*/
