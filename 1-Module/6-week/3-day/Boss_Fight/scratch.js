// Readline stuff goes here
const { rawListeners } = require("process")
const readline = require("readline")
const chalk = require("chalk")

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Global Objects go here
const character = {
  HP: undefined,
  class: undefined, // class value will be lowercase
  name: undefined,
  attack: undefined,
  defense: undefined,
}

const wolfMob = {
  HP: 80,
  attack: 6,
  defense: 4,
}

const chalkRainbow = require('chalk-rainbow')


// Damage Formulas
// Actual Attack =  [Attacker's Attack Stat/Receiver's Defense Stat]
// Critical Hits = [Attacker's Attack Stat x 2/ Receiver's Defense Stat] Only applies if dice === 20
// Defense Formula = If Attack Roll < Receiver's Defense Stat, then BLOCKED

// Starting Dialog
//     DICE TEST
// let dice1 = DiceRoll()
// let dice2 = DiceRoll()
// let dice3 = DiceRoll()
// console.log(dice1)
// console.log(dice2)
// console.log(dice3)

r1.question(`${chalk.whiteBright.bold("Hello Adventurer! What is your name?")} `, characterName)

// Helper Functions go below here (May nest functions)
function stringLowerCaser(string) {
  return string.toLowerCase();
}

function blankChecker(string) {
  if (!string)
    return true
}

function DiceRoll() { // Function will always return a random  number from 1 - 20
  return Math.ceil(Math.random() * 19) + 1
}


function damageDealt(dice, playerAttack, mobDefense) {
  return dice === 20 ? Math.round((playerAttack * 2) / mobDefense) : Math.round(playerAttack / mobDefense)
}

function checkHP(enemyHP, playerHP) {
  if (enemyHP <= 0) {
    console.clear()
    console.log(`${chalkRainbow("ZAVIAR FALLS OVER AND DIES")}`) // eventually change WOLF to the name of MOB
    r1.close();
    return true;
  }
  if (playerHP <= 0) {
    console.clear();
    console.log(chalk.red.bold("ＹＯＵ　ＤＩＥＤ　ヰーげ"));
    r1.close();
    return true;
  }
  return false;
}


// Core functions
function characterName(answer) {
  if (blankChecker(answer) || answer.length > 10) {
    r1.question('Please input actual characters. ', characterName)
  } else {
    character["name"] = answer
    console.clear();
    console.log(`Greetings, ${chalk.green.bold(character.name)}!`)
    r1.question(`What class do you wanna pick? Your options are: ${chalk.redBright.bold("Warrior")}, ${chalk.yellow.bold("Mage")}, and ${chalk.blue.bold("Rogue")}. `, classChoice)
  }
}
// Every characters stats
function classChoice(answer) {
  let answerLowerCased = stringLowerCaser(answer)
  if (answerLowerCased == "warrior") {
    character["class"] = answerLowerCased
    character.HP = 20
    character.attack = 14
    character.defense = 10
    console.clear()
    firstEncounter()
  }
  else if (answerLowerCased == "mage") {
    character["class"] = answerLowerCased
    character.HP = 10
    character.attack = 18
    character.defense = 6
    console.clear()
    firstEncounter()
  }
  else if (answerLowerCased == "rogue") {
    character["class"] = answerLowerCased
    character.HP = 14
    character.attack = 16
    character.defense = 8
    console.clear()
    firstEncounter()
  }
  else {
    r1.question(`${chalk.red.bold("Please choose a valid class.")} `, classChoice)
  }
}

function firstEncounter() {
  console.clear()
  console.log(`${character.name} the ${character.class} is walking through a forest and suddenly a ${chalk.magentaBright.bold("Wild Zaviar")} attacks you! What do you do?`)
  console.log('')
  battleMenu()
}


function battleMenu(mobHP = wolfMob.HP, playerHP = character.HP) {
  console.log(chalk.magentaBright(`Zaviar - ${mobHP} / ${wolfMob.HP}`))
  console.log(chalk.greenBright(`${character.name} - ${playerHP} / ${character.HP}`))
  console.log('')
  console.log(chalk.red.bold("> Attack "))
  console.log(chalk.blueBright.bold("> Run Away "))
  console.log('')
  r1.question("", answer => {
    let mobBattleAnswer = stringLowerCaser(answer)
    if (mobBattleAnswer === "attack" || mobBattleAnswer === "fight") {
      console.clear()
      turnBasedBattle(mobHP, playerHP)
    }
    else if (mobBattleAnswer === "run" || mobBattleAnswer === "flight" || mobBattleAnswer === "run away") {
      console.clear()
      let fleeDice = DiceRoll()
      if (fleeDice >= 18) {
        console.log(`${chalkRainbow('YOU RAN AWAY!')}`)
        r1.close();
        return;
      } else {
        console.clear()
        console.log(chalk.cyanBright("YOU FAILED TO RUN AWAY"))
        wolfPhase(mobHP, playerHP)
      }
    }
    else {
      console.clear();
      console.log(chalk.red("Please Pick a proper option."))
      r1.question("", battleMenu(mobHP, playerHP)) //not working properly
    }
  })
}

function turnBasedBattle(enemyHP = wolfMob.HP, playerHP = character.HP) {
  checkHP(enemyHP, playerHP)
  console.log(`Zaviar - ${enemyHP} / ${wolfMob.HP}`)
  console.log(`${character.name} - ${playerHP} / ${character.HP}`)
  // Base case = if someone dies.


  let playerDice = DiceRoll()
  console.clear()
  console.log(`${chalk.green.bold(character.name)} rolled ${playerDice}`)

  if (playerDice === 20) {
    let damage = damageDealt(playerDice, character.attack, wolfMob.defense)
    console.log(`${chalkRainbow(`!!!CRITICAL HIT!!! ${character.name} inflicted ${damage} damage!`)}`)
    enemyHP -= damage;
    if (checkHP(enemyHP, playerHP)) {
      return;
    }
    wolfPhase(enemyHP, playerHP)
  } else if (playerDice > wolfMob.defense) {
    let damage = damageDealt(playerDice, character.attack, wolfMob.defense)
    console.log(`${character.name} inflicted ${chalk.red.bold(damage)} damage!`)
    enemyHP -= damage;
    if (checkHP(enemyHP, playerHP)) {
      return;
    }
    wolfPhase(enemyHP, playerHP)
  } else {
    console.log(`${character.name} missed`)
    wolfPhase(enemyHP, playerHP)
  }
}

function wolfPhase(enemyHP, playerHP) {

  let mobDice = DiceRoll()
  console.log('')
  console.log(`${chalk.magentaBright("Zaviar's")} turn!`)
  console.log(`Zaviar rolled ${mobDice}`)
  if (mobDice === 20) {
    let damage = damageDealt(mobDice, wolfMob.attack, character.defense)
    console.log(`${chalkRainbow(`!!!CRITICAL HIT!!! Zaviar says you failed the assessment and inflicts ${damage} damage!`)}`)
    console.log('')
    playerHP -= damage;
    if (checkHP(enemyHP, playerHP)) {
      return;
    }
    battleMenu(enemyHP, playerHP)
  }
  else if (mobDice > character.defense) {
    let damage = damageDealt(mobDice, wolfMob.attack, character.defense)
    console.log(`Zaviar inflicted ${chalk.red.bold(damage)} damage!`)
    console.log('')
    playerHP -= damage
    if (checkHP(enemyHP, playerHP)) {
      return;
    }
    battleMenu(enemyHP, playerHP);
    // turnBasedBattle(enemyHP, playerHP)
  }
  else {
    console.log(`${character.name} ${chalk.green.bold("blocked")} the attack!`)
    console.log('')
    battleMenu(enemyHP, playerHP)
    // turnBasedBattle(enemyHP, playerHP)
  }
}
