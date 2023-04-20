const { Console } = require("console");
const { lookupService } = require("dns");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Welcome! What is your name? \n\n", (answer) => {
  console.log(
    "\x1b[34m%s\x1b[0m",
    `\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n`
  );
  console.log(`\nHello ${answer}!\n`);

  rl.question(
    "You wake up to a foul stench and realized that you have been imprisoned in a small jail cell. You are unable to recall how you were placed in this predicament or how long you have been unconsious for. You notice that the cell door is unlocked. You only have one goal in mind: escape!\n\nTo begin: input the given direction.\n\n-]UP[-\n\n",
    move
  );
});

const dungeon = {
  prison: {
    description:
      "The foul stench of your own filth pervades throughout the room. Who in their right mind would voluntarily enter this disgusting entrapment.",
    next: { up: "hallway adjacent to the prison" },
  },
  "hallway adjacent to the prison": {
    description:
      "You were able to break out, and it looks like you are in a dimly lit hallway. Is this someone's home?",
    next: {
      down: "prison",
      up: "library",
      right: "cellar",
    },
    position: [3, 0],
  },
  cellar: {
    description:
      "You feel the cold and dampness of the air around you. There are barrels of what you can only assume is wine, and even though you so desperately want to steal a sip - you decide to press forward.",
    next: {
      up: "pantry",
      left: "hallway adjacent to the prison",
      right: "secret laboratory",
    },
    position: [3, 1],
  },
  "secret laboratory": {
    description:
      "There are tables and racks filled with lab equipment. You notice glass beakers filled with an unknown substance. You scan the room for a way out, but there is only one door which is the one you just came from.",
    next: {
      left: "cellar",
    },
    position: [3, 2],
    battle: true,
  },
  theatre: {
    description:
      "Butter filled air hits your senses as you step into the movie room. There is a massive projector but the only thing playing is a static screen.",
    next: {
      up: "guest room",
      right: "bathroom",
    },
    position: [3, 3],
  },
  bathroom: {
    description:
      "This spacious, square bathroom has a shower, bathtub, and sink with glass fixtures.  The sink is set into a resin counter and light is provided by wall lamps and a ceiling light. Among the first things you notice walking in is a key on the counter.",
    next: {
      left: "theatre",
    },
    position: [3, 4],
    contents: ["key from the bathroom"],
  },
  library: {
    description:
      "You see walls lined with books, but no way out. You vaguely notice that most of the books are for learning how to code. The only choice is back the way you came.",
    next: {
      down: "hallway adjacent to the prison",
    },
    position: [2, 0],
  },
  pantry: {
    description:
      "Upon entry, you are met with a giant wall of non-perishable goods. Is the owner of this house preparing for something?",
    next: {
      down: "cellar",
      up: "kitchen",
      right: "study",
    },
    position: [2, 1],
  },
  study: {
    description:
      "One single desk and a swivel chair faces the far wall. A mess of papers flood the surface, and what appears to be an extremely old PC. Does't look like theres any other doors, better go back to where you came from.",
    next: {
      left: "pantry",
    },
    position: [2, 2],
    trap: true,
  },
  "guest room": {
    description:
      "A king size bed along with a bean bag in the corner, with a slight film of dust on everything. Looks like someone hasnt had any guests in a very long time.",
    next: {
      down: "theatre",
      up: "living room",
      right: "sun deck",
    },
    position: [2, 3],
  },
  "sun deck": {
    description:
      "As you step in, a ray of warmth strikes your face slightly blinding you momentarily. Beautiful floor to ceiling windows adorn the opposite wall, flooding the room with natural light. There are two doors, but there is also a hammock that looks quite inviting. Maybe you'll stay for a little. Maybe not.",
    next: {
      up: "foyer",
      left: "guest room",
    },
    position: [2, 4],
  },
  lounge: {
    description:
      "Home bar, pool table, fireplace, and a big sofa. Might just lounge around for a bit.",
    next: {
      right: "kitchen",
    },
    position: [1, 0],
    battle: true,
  },
  kitchen: {
    description:
      "A beautiful kitchen with modern finish, and an epic marble slab lain as the surface of the island. Doesnt look like this kitchen has been used very much.",
    next: {
      down: "pantry",
      up: "observatory",
      left: "lounge",
      right: "dining room",
    },
    position: [1, 1],
  },
  "dining room": {
    description:
      "You step into what appears to be the dining room, one long live wood table rests as the centerpiece of the room, along with a full set of chairs, however it looks like only one place has been set",
    next: {
      left: "kitchen",
      right: "living room",
    },
    position: [1, 2],
  },
  "living room": {
    description:
      "The dimly lit room is filled with furniture draped with white sheets. You notice that the fireplace is still burning ever so lightly, but who is it meant to keep warm?",
    next: {
      down: "guest room",
      left: "dining room",
    },
    position: [1, 3],
  },
  foyer: {
    description:
      "A couple chairs, and a humble piano that plays slightly out of tune. Looks like it might be close to the exit",
    next: {
      down: "sun deck",
      up: "mudroom",
    },
    position: [1, 4],
  },
  garage: {
    description:
      "There are boxes full of tools, and one table with restraints in the center of the room.",
    next: {
      right: "observatory",
    },
    position: [0, 0],
    trap: true,
  },
  observatory: {
    description:
      "Is that Celestron CGEM II 800 8 f/2 Rowe-Ackerman Schmidt Astrograph GoTo Telescope???",
    next: {
      down: "kitchen",
      left: "garage",
      right: "laundry room",
    },
    position: [0, 1],
  },
  "laundry room": {
    description:
      "You notice the machines running, but cannot make out what is inside them.",
    next: {
      left: "observatory",
      right: "boiler room",
    },
    position: [0, 2],
  },
  "boiler room": {
    description:
      "You hear banging and clicking from the furnace and boiler around you. You notice a key dangling from one of the boiler handles.",
    next: {
      left: "laundry room",
    },
    position: [0, 3],
    contents: ["key from the boiler room"],
  },
  mudroom: {
    description:
      "Dust coats line the wall, as well as a single pair of dirty boots that have been placed neatly under the bench. You see the exit in front of you, but it looks like it is locked. If only you had something that could open it. ",
    next: {
      down: "foyer",
    },
    position: [0, 4],
  },
  "front yard": {
    description:
      "You have reached the exit and escaped the horror! Enjoy your freedom!\n\n",
    next: { "game over": true },
  },
};

const character = {
  location: "prison",
  inventory: [],
};

const map = [
  [[" "], [" "], [" "], [" "], [" "]],
  [[" "], [" "], [" "], [" "], [" "]],
  [[" "], [" "], [" "], [" "], [" "]],
  [[" "], [" "], [" "], [" "], [" "]],
];

const inputs = ["up", "down", "left", "right"];
let room = dungeon.prison;
let choices = Object.keys(room.next);
let currPos = dungeon["hallway adjacent to the prison"].position;

function move(direction) {
  if (
    !inputs.includes(direction.toLowerCase()) ||
    !choices.includes(direction.toLowerCase())
  ) {
    console.log(
      "\x1b[34m%s\x1b[0m",
      `\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n`
    );
    console.log(
      map,
      "\n",
      "\x1b[33m",
      "X = Current location // O = Explored rooms\n",
      "\x1b[0m"
    );
    console.log(
      `Your brain must still be mush from being imprisoned. That was not a valid input.\n`
    );

    rl.question(
      `\nWhich direction would you like to go next? \n\n-]${choices
        .join("[--]")
        .toUpperCase()}[-\n\n`,
      move
    );
  } else {
    moveTo(room.next[direction.toLowerCase()]);

    console.log(
      "\x1b[34m%s\x1b[0m",
      `\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n`
    );
    console.log(`\nYou are currently in the ${character.location}.\n`);
    if (room.position) mapPos(room.position);
    console.log(room.description, "\n");

    if (room.contents && room.contents.length) takeItem();

    checkKey();

    if (room.trap) quickMath();

    if (room.battle) rpsBattle();

    if (character.location === "front yard") return rl.close();

    rl.question(
      `\nWhich direction would you like to go next? \n\n-]${choices
        .join("[--]")
        .toUpperCase()}[-\n\n`,
      move
    );
  }
}

function moveTo(roomName) {
  character.location = roomName;
  room = dungeon[roomName];
  choices = Object.keys(room.next);
}

function takeItem() {
  let item = room.contents.pop();
  console.log(
    "\x1b[36m%s\x1b[0m",
    `\nYou picked up the ${item} and placed it in your inventory.\n`
  );
  character.inventory.push(item);
}

function checkKey() {
  if (character.location === "mudroom") {
    if (character.inventory.length === 2) {
      room.next.up = "front yard";
      choices = Object.keys(room.next);

      console.log(
        "\x1b[36m%s\x1b[0m",
        `\nYou use the keys that you found earlier to unlock the door.\n`
      );

      rl.question(
        `\nWhich direction would you like to go next? \n\n-]${choices
          .join("[--]")
          .toUpperCase()}[-\n\n`,
        move
      );
    } else {
      console.log(
        "\x1b[36m",
        `\nYou do not have all the keys in your posession. You curently have`,
        "\x1b[31m",
        `${character.inventory.length} of 2 keys`,
        "\x1b[36m",
        `in your inventory. Better backtrack to find them.\n`,
        "\x1b[0m"
      );

      rl.question(
        `\nWhich direction would you like to go next? \n\n-]${choices
          .join("[--]")
          .toUpperCase()}[-\n\n`,
        move
      );
    }
  }
}

function mapPos(position) {
  map[currPos[0]][currPos[1]] = ["O"];
  map[position[0]][position[1]] = ["X"];
  currPos = position;
  console.log(
    map,
    "\n",
    "\x1b[33m",
    "X = Current location // O = Explored rooms\n",
    "\x1b[0m"
  );
}

let timer, time;
let num1, num2, operator;
let count;
const signs = ["+", "-", "*", "%"];

function startTimer() {
  time--;
  if (time === 0) clearInterval(timer);
}

function generateProblem() {
  num1 = Math.floor(Math.random() * 11);
  num2 = Math.floor(Math.random() * 11);
  operator = signs[Math.floor(Math.random() * signs.length)];
}

function quickMath() {
  time = 15;
  count = 5;
  generateProblem();

  console.log(
    "\x1b[31m%s\x1b[0m",
    `\nYou walked into a trap! You notice that the door sealed shut behind you and the walls started closing in. Solve the problems before the timer expires to break free.\n`
  );

  rl.question(
    `\nYou have 15 seconds to solve 5 math problems. Press any key to begin.\n\n`,
    () => {
      timer = setInterval(startTimer, 1000);
      askQuestion();
    }
  );
}

function checkAnswer(answer) {
  if (time === 0) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `\nYou ran out of time! Darkness fills your vision. Better luck next time.\n\n\n                            G A M E  O V E R\n\n\n`
    );

    return rl.close();
  }

  if (calculate(num1, operator, num2) === Number(answer)) {
    console.log("\x1b[32m%s\x1b[0m", `\n                    CORRECT`);
    count--;
    generateProblem();

    if (count > 0) askQuestion();
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\n                   INCORRECT`);

    askQuestion();
  }

  if (count === 0) {
    room.trap = false;

    console.log(
      "\x1b[34m%s\x1b[0m",
      `\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n`
    );
    console.log(
      map,
      "\n",
      "\x1b[33m",
      "X = Current location // O = Explored rooms\n",
      "\x1b[0m"
    );
    console.log(
      "\x1b[36m%s\x1b[0m",
      `\nGreat job! It looks like the trap has been disarmed and won't activate again.\n`
    );
    console.log(`\nYou are currently in the ${character.location}.\n`);
    console.log(room.description, "\n");

    rl.question(
      `\nWhich direction would you like to go next? \n\n-]${choices
        .join("[--]")
        .toUpperCase()}[-\n\n`,
      move
    );
  }
}

function calculate(num1, operator, num2) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "%") return num1 % num2;
}

function askQuestion() {
  console.log(
    "\x1b[34m%s\x1b[0m",
    `\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n`
  );
  console.log(
    "\x1b[31m",
    `\n${time}`,
    "\x1b[36m",
    `seconds remaining.`,
    "\x1b[33m",
    `${count}`,
    "\x1b[36m",
    `problems left.\n`,
    "\x1b[0m"
  );

  rl.question(`\nWhat is ${num1} ${operator} ${num2}?\n\n`, checkAnswer);
}

const rps = ["rock", "paper", "scissors"];
let cpu, score, cpuScore, maxScore;

function rpsBattle() {
  score = 0;
  cpuScore = 0;
  maxScore = 3;
  cpu = rps[Math.floor(Math.random() * rps.length)];

  console.log(
    "\x1b[31m%s\x1b[0m",
    `\nA shadow appeared in front of you! It looks like it wants to have a rock-paper-scissors battle with you. First to 5 wins!\n`
  );

  rpsQuestion();
}

function rpsQuestion() {
  console.log(
    "\x1b[31m",
    `\n${cpuScore}`,
    "\x1b[36m",
    `Shadow wins.`,
    "\x1b[33m",
    `${score}`,
    "\x1b[36m",
    `player wins.\n`,
    "\x1b[0m"
  );

  rl.question(
    `\nWhat is your choice?\n\n-]ROCK[-]PAPER[-]SCISSORS[-\n\n`,
    compareChoice
  );
}

function compareChoice(choice) {
  if (!rps.includes(choice.toLowerCase())) {
    console.log(
      "\x1b[34m%s\x1b[0m",
      `\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n`
    );
    console.log(`That was not a valid input.\n`);

    rpsQuestion();
  } else {
    if (cpu === "rock") {
      if (choice.toLowerCase() === "rock") neutral();
      else if (choice.toLowerCase() === "paper") win(choice);
      else if (choice.toLowerCase() === "scissors") lose(choice);
    } else if (cpu === "paper") {
      if (choice.toLowerCase() === "rock") lose(choice);
      else if (choice.toLowerCase() === "paper") neutral();
      else if (choice.toLowerCase() === "scissors") win(choice);
    } else if (cpu === "scissors") {
      if (choice.toLowerCase() === "rock") win(choice);
      else if (choice.toLowerCase() === "paper") lose(choice);
      else if (choice.toLowerCase() === "scissors") neutral();
    }
  }
}

function win(choice) {
  score++;

  if (score !== maxScore) {
    console.log(
      "\x1b[34m%s\x1b[0m",
      `\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n`
    );
    console.log(
      "\x1b[32m%s\x1b[0m",
      `\nYour ${choice.toLowerCase()} beats the CPU's ${cpu}. Keep going!`
    );

    cpu = rps[Math.floor(Math.random() * rps.length)];

    rpsQuestion();
  } else {
    room.battle = false;

    console.log(
      "\x1b[34m%s\x1b[0m",
      `\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n`
    );
    console.log(
      map,
      "\n",
      "\x1b[33m",
      "X = Current location // O = Explored rooms\n",
      "\x1b[0m"
    );
    console.log(
      "\x1b[36m%s\x1b[0m",
      `\nGreat job! It looks like you defeated the shadow. Hopefully it does not show up here again.\n`
    );
    console.log(`\nYou are currently in the ${character.location}.\n`);
    console.log(room.description, "\n");

    rl.question(
      `\nWhich direction would you like to go next? \n\n-]${choices
        .join("[--]")
        .toUpperCase()}[-\n\n`,
      move
    );
  }
}

function lose(choice) {
  cpuScore++;

  if (cpuScore !== maxScore) {
    console.log(
      "\x1b[34m%s\x1b[0m",
      `\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n`
    );
    console.log(
      "\x1b[31m%s\x1b[0m",
      `\nThe CPU's ${cpu} beats your ${choice.toLowerCase()}. Keep going!`
    );

    cpu = rps[Math.floor(Math.random() * rps.length)];

    rpsQuestion();
  } else {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `\nYou were defeated! Darkness fills your vision. Better luck next time.\n\n\n                            G A M E  O V E R\n\n\n`
    );

    return rl.close();
  }
}

function neutral() {
  console.log(
    "\x1b[34m%s\x1b[0m",
    `\n<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>\n`
  );
  console.log(
    "\x1b[33m%s\x1b[0m",
    `\nYou tied that match with ${cpu}. Keep going!`
  );

  cpu = rps[Math.floor(Math.random() * rps.length)];

  rpsQuestion();
}
