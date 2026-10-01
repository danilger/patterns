/**
 * @pattern Mediator (Посредник)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Централизует взаимодействие коллег, убирая прямые связи.
 * В FP — chat-room как замыкание с реестром участников.
 *
 * @when
 * - много объектов общаются хаотично; нужен хаб
 */

const createChatRoom = () => {
  const users = new Map();

  const room = {
    addUser: (user) => {
      users.set(user.name, user);
      user.setMediator(room);
    },
    send: (message, from, toName) => {
      const to = users.get(toName);
      if (!to) {
        console.log(`User ${toName} not found`);
        return;
      }
      to.receive(message, from.name);
    },
    broadcast: (message, from) => {
      for (const user of users.values()) {
        if (user !== from) user.receive(message, from.name);
      }
    },
  };

  return room;
};

const createUser = (name) => {
  let mediator = null;
  const user = {
    name,
    setMediator: (m) => {
      mediator = m;
    },
    send: (message, toName) => mediator.send(message, user, toName),
    sendAll: (message) => mediator.broadcast(message, user),
    receive: (message, fromName) => {
      console.log(`${name} <- ${fromName}: ${message}`);
    },
  };
  return user;
};

// --- demo ---
const room = createChatRoom();
const alice = createUser("Alice");
const bob = createUser("Bob");
const carol = createUser("Carol");

room.addUser(alice);
room.addUser(bob);
room.addUser(carol);

alice.send("Hi Bob!", "Bob");
bob.sendAll("Hello everyone");
