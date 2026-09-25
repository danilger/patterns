/**
 * @pattern Factory Method (Фабричный метод)
 * @category Creational
 *
 * @description
 * Определяет интерфейс для создания объекта, но позволяет подклассам
 * решать, какой класс инстанцировать.
 *
 * @todo Реализация ниже
 */

class Transport {
  deliver() {
    throw new Error("deliver() must be implemented");
  }
}

class Truck extends Transport {
  deliver() {
    return "Deliver by land in a box";
  }
}

class Ship extends Transport {
  deliver() {
    return "Deliver by sea in a container";
  }
}

class Logistics {
  /** Factory Method — переопределяется в подклассах */
  createTransport() {
    throw new Error("createTransport() must be implemented");
  }

  planDelivery() {
    const transport = this.createTransport();
    return transport.deliver();
  }
}

class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship();
  }
}

// --- demo ---
const road = new RoadLogistics();
const sea = new SeaLogistics();

console.log(road.planDelivery());
console.log(sea.planDelivery());
