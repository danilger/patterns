/**
 * @pattern Mediator (Посредник)
 * @category Behavioral
 *
 * @description
 * Инкапсулирует взаимодействие множества объектов. Коллеги общаются
 * через Mediator, а не напрямую друг с другом.
 *
 * @todo Реализация ниже
 */

class ChatMediator {
  send(message, from, to) {
    throw new Error("send() must be implemented");
  }
  addUser(user) {
    throw new Error("addUser() must be implemented");
  }
}

class ChatRoom extends ChatMediator {
  constructor() {
    super();
    this.users = new Map();
  }

  addUser(user) {
    this.users.set(user.name, user);
    user.setMediator(this);
  }

  send(message, from, toName) {
    const to = this.users.get(toName);
    if (!to) {
      console.log(`User ${toName} not found`);
      return;
    }
    to.receive(message, from.name);
  }

  broadcast(message, from) {
    for (const user of this.users.values()) {
      if (user !== from) {
        user.receive(message, from.name);
      }
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  send(message, toName) {
    this.mediator.send(message, this, toName);
  }

  sendAll(message) {
    this.mediator.broadcast(message, this);
  }

  receive(message, fromName) {
    console.log(`${this.name} <- ${fromName}: ${message}`);
  }
}

// --- demo ---
const room = new ChatRoom();
const alice = new User("Alice");
const bob = new User("Bob");
const carol = new User("Carol");

room.addUser(alice);
room.addUser(bob);
room.addUser(carol);

alice.send("Hi Bob!", "Bob");
bob.sendAll("Hello everyone");
