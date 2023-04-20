// create an array of  words
// math.floor(math.random()) * array.length to find a random word = secretword
// 

let array = ['flowy', 'jimmy', 'cheri', 'codes', 'jackie', 'daniel']

const secretWords = (array) => array[Math.floor(Math.random()* array.length)]

let correctWord = secretWords(array)


let board = [['_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_']]
const startGame = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    printBoard()
    let secretWord = correctWord
    let currentTry = 0
    readline.question(`Enter a word:`, worldFunc)
    
 function worldFunc(word) {
        secretWord.split('').forEach((secretLetter, secretIdx) => {
            word.split('').forEach((letter, idx) => {
                if (secretLetter == letter && idx == secretIdx) {

                    board[currentTry][idx] = letter

                   readline.question(" Keep going", worldFunc)
                } 
            })
        })
        printBoard()


        readline.close()
    }
}

const printBoard = () => {
    board.forEach(line => console.log(line.join()))
}

// const restart = () => {
// if ()

// }
startGame()

// console.log(generalWordDisplay)



// console.log(correctWord)
//  let newArr = []
// function checkWord(letter) {
//     for ( let i =0; i<correctWord.length; i++){
//             let correctLetter = correctWord[i]
//             console.log (correctWord[i])
//             if (letter === correctLetter){
//                 console.log(i)
//                 return true
               
            
//             }
//     }
//     return false
// }

// console.log(checkWord('e'))

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Guess a letter ", handleAnswer);

// function handleAnswer(answer) {
//  if (checkWord(answer) === false ){
//   rl.question("try again", handleAnswer);
//  } else {
//     handleAnswer2(answer)
//  }
//  }
// function handleAnswer2(answer) {

//     console.log(generalWordDisplay)

//   rl.close();
// }




//   const gradient = require('gradient-string');
      //   var figlet = require('figlet');

      //   if(secretWord === word){
      //     function winner(){
      //     const msg = `Congratulations! `

      //     figlet(msg,(err,data) =>{
      //         console.log(gradient.pastel.multiline(data))
      //     })
      //   }
      //   winner()
      //    return readline.close()
      // }
           //insert a bonus question option

            // var bonusQuestion = {
            //   type: 'confirm',
            //   name: 'yes',
            //   message: 'Would you like to answer a bonus question to receive a prize?',
            //   default: true
            // };
            
            // inquirer.prompt(bonusQuestion).then(answer2 =>{
            //   if(answer2.yes){
            //     question1()
            //   } else{
            //     console.log('Bye noob')
            //     return readline.close()
            //   }
            // })

           // insert a mutiple choice option 
            // async function question1(){
            // const answer = await inquirer.prompt({
            //   name: 'question_1',
            //   type: 'list',
            //   message: 'what is my name?',
            //   choices: [
            //     'Bob',
            //     'jimmy',
            //     'noob',
            //     'deep',
          //     ],

          //   })
          //   return handleAnswer(answer.question_1 == 'jimmy')
          //   }
          //       /// Nanospinner checking answer

          //   async function handleAnswer(isCorrect){
          //   const spinner = createSpinner('Checking answer...').start()
              

          //     if(isCorrect){
          //       setTimeout(() => {
          //         spinner.success({ text: 'Nice Work'})
          //       }, 1000)
          //     } else {
          //       setTimeout(() => {
          //         spinner.error({ text: 'You Suck'})
          //       }, 1000)
          //     }
          //   }


          // }

