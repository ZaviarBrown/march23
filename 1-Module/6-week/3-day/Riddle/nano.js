// const inquirer = require('inquirer');
import { createSpinner} from "nanospinner"
import inquirer from "inquirer"
async function question1(){
    const answer = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'what is my name?',
      choices: [
        'Bob',
        'jimmy',
        'noob',
        'deep',
      ],

    })
    return handleAnswer(answer.question_1 == 'jimmy')
    }
        /// Nanospinner checking answer

    async function handleAnswer(isCorrect){
    // const spinner = createSpinner('Checking answer...').start()
      

      if(isCorrect){
        setTimeout(() => {
          spinner.success({ text: 'Nice Work'})
        }, 1000)
      } else {
        setTimeout(() => {
          spinner.error({ text: 'You Suck'})
        }, 1000)
      }
    }

question1()
  