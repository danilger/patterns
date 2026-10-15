/**
 * @pattern Config Module
 * @area Backend / NestJS
 * @sources @nestjs/config best practices
 *
 * @description
 * Централизованная типизированная конфигурация вместо process.env по всему коду.
 * Часто + schema validation (Joi/Zod) на старте приложения.
 *
 * @when любой production Nest app
 */

function loadConfig(env) {
  const config = {
    port: Number(env.PORT || 3000),
    dbUrl: env.DATABASE_URL || "",
    jwtSecret: env.JWT_SECRET || "",
  };
  if (!config.dbUrl) throw new Error("DATABASE_URL required");
  if (!config.jwtSecret) throw new Error("JWT_SECRET required");
  return Object.freeze(config);
}

// --- demo ---
try {
  loadConfig({});
} catch (e) {
  console.log("fail:", e.message);
}
console.log(
  loadConfig({ DATABASE_URL: "postgres://localhost/app", JWT_SECRET: "x" })
);

/** @example NestJS */
/*
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
  ],
})
export class AppModule {}
*/
