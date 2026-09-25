/**
 * @pattern Adapter (External services)
 * @area Backend / NestJS
 * @sources Hexagonal / Ports & Adapters; Nest providers
 *
 * @description
 * Домен/application зависят от порта (интерфейса), а адаптер ходит в Stripe,
 * S3, SendGrid. Смена провайдера = новый адаптер, без правок use-case.
 *
 * @when платежи, почта, storage, анти-corruption layer к легаси API
 */

class CheckoutService {
  constructor(payments) {
    this.payments = payments;
  }
  async pay(orderId, amount) {
    return this.payments.charge({ orderId, amount, currency: "USD" });
  }
}

const StripeAdapter = {
  async charge({ orderId, amount, currency }) {
    return `stripe: charged ${amount} ${currency} for ${orderId}`;
  },
};

const FakePaymentsAdapter = {
  async charge({ orderId, amount }) {
    return `fake: ok ${orderId} ${amount}`;
  },
};

// --- demo ---
(async () => {
  console.log(await new CheckoutService(StripeAdapter).pay("o1", 10));
  console.log(await new CheckoutService(FakePaymentsAdapter).pay("o2", 10));
})();

/** @example NestJS */
/*
export const PAYMENTS = Symbol('PAYMENTS');

@Module({
  providers: [
    CheckoutService,
    { provide: PAYMENTS, useClass: StripePaymentsAdapter },
  ],
})
export class BillingModule {}
*/
