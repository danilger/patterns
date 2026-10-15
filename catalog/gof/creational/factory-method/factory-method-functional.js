/**
 * @pattern Factory Method (Фабричный метод)
 * @category Creational
 * @variant functional
 *
 * @description
 * Определяет интерфейс для создания объекта, но позволяет «подклассам»
 * решать, что инстанцировать. В FP — фабричная функция + общий алгоритм.
 *
 * @when
 * - алгоритм общий, а тип продукта варьируется
 * - не хочется жёстко писать new ConcreteProduct в клиенте
 */

const truck = () => ({ deliver: () => "Deliver by land in a box" });
const ship = () => ({ deliver: () => "Deliver by sea in a container" });

/** Общий алгоритм; createTransport — «фабричный метод» как зависимость */
const createLogistics = (createTransport) => ({
  planDelivery: () => createTransport().deliver(),
});

const roadLogistics = createLogistics(truck);
const seaLogistics = createLogistics(ship);

// --- demo ---
console.log(roadLogistics.planDelivery());
console.log(seaLogistics.planDelivery());
