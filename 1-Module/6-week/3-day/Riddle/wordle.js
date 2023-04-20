
const { read } = require('fs')
const inquirer = require('inquirer');
const colors = require('colors');
let array = ['river', 'noses', 'timer', 'water', 'codes', 'clock']
var emoji = require('node-emoji')
const chalkAnimation = require('chalk-animation');
const { createSpinner } = require('nanospinner');
const secretWords = (array) => array[Math.floor(Math.random()* array.length)]

let correctWord = secretWords(array)


var beginning = {
  type: 'confirm',
  name: 'start',
  message: 'Hi Traveler, would you like to accept this quest? ' + emoji.get('beginner'),
  default: true
};


inquirer.prompt(beginning).then(answer =>{
  if(answer.start){
    startGame()
  } else{
    console.log( 'Bye noob')
  }
})

let board = [['_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_']]
const startGame = () => {
  let count = 5
  // console.log('\n')

  const rainbow = chalkAnimation.rainbow('Solve this Riddle: What can run but cannot walk?'); // Animation starts

setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 100000);

setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 1000);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
  
    setTimeout(() =>{
      printBoard()
      readline.question(`Enter a word:`, worldFunc)
    },1000)
    // printBoard()

    let secretWord = correctWord
    let currentTry = 0
    // readline.question(`Enter a word:`, worldFunc)
     
 function worldFunc(word) {
        secretWord.split('').forEach((secretLetter, secretIdx) => {
            word.split('').forEach((letter, idx) => {
                if (secretLetter == letter && idx == secretIdx) {
                    board[currentTry][idx] = letter.toUpperCase().green
                    
                }
                
            })
        })
        printBoard()


        const gradient = require('gradient-string');
        var figlet = require('figlet');
        if(secretWord === word){
          function winner(){
          const msg = `Congratulations! `
          // figlet custom 
          figlet(msg,(err,data) =>{
              console.log(gradient.pastel.multiline(data))
              var bonusQuestion = {
              type: 'confirm',
              name: 'yes',
              message: 'Would you like to receive your prize now?',
              default: true
            };
            
            inquirer.prompt(bonusQuestion).then(answer2 =>{
              if(answer2.yes){
                question1()
              } else{
                console.log('Bye noob')
                return readline.close()
              }
            })
async function question1(){
            const answer = await inquirer.prompt({
              name: 'question_1',
              type: 'list',
              message: "What item do you want?",
              choices: [
                'Health Potion',
                'Sword + 12 Dmg',
                'Shoes + 12 Armor',
                'A kiss + 12 Physical Touch',
              ],

            })
            return handleAnswer(answer.question_1 == 'Health Potion' || 'Sword + 12 Dmg' || 'Shoes + 12 Armor' || 'A kiss + 12 Physical Touch')
            }
                /// Nanospinner checking answer
                
           function handleAnswer(isCorrect){
            const spinner = createSpinner('Loading the item to your inventory...').start()
              

              if(isCorrect){
                setTimeout(() => {
                  spinner.success({ text: 'YOU GOT YOUR ITEM' +emoji.get('raised_back_of_hand')})
                }, 1000)
                readline.close()
              } else {
                setTimeout(() => {
                  spinner.error({ text: 'Sorry, You got it wrong! Better luck next time!!'+ emoji.get('pensive')})
                }, 1000)
                readline.close()
              }
            }


            return readline.close()

          })
        }

        winner()

           return readline.close()
          }
  
          
        currentTry++
       if (currentTry <5){
         count--
        readline.question(`You have ${count} trials remaining. Enter again: `.red, answer => {worldFunc(answer)})
       } else {
           console.log('Sorry You Have Died In The '.red + correctWord[0].toUpperCase().red + correctWord.slice(1).red + ' ' + emoji.get('skull') )
           readline.close()
       }

    }
   

}



const printBoard = () => {
    board.forEach(line => console.log(line.join()))
}

