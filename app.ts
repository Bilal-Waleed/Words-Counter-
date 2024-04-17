#! /usr/bin/env node
// this is shabhang...

import inquirer from "inquirer";
import chalk from "chalk";

// ----------------------------------Function to animate text------------------------------------------

async function animateText(text: string, delay: number = 30) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
}

async function fastAnimate(text: string, delay: number = 18) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
}

async function slowAnimate(text: string, delay: number = 30) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
}

//----------------------------ASKING USER NAME-----------------------------------

const askUserName = async () => {

  const userName_ans = await inquirer.prompt([
    {
    name: `usr_name`,
    type: `input`,
    message: chalk.green(`\nWhat is Your Good Name:`),
    validate: (input) => {

      const trimmedInput = input.trim();
      if (trimmedInput === ``) {
        return chalk.redBright(`Please enter your name.`);
      } else if (!/^[a-zA-Z]+$/.test(trimmedInput)) {
        return chalk.redBright(`Please enter a valid name without numbers.`);
      }
      return true;
    },
    }
  ]);
  return userName_ans.usr_name;
};
const userName = await askUserName();

//-------------------------Word counter program Heading -------------------------

let appName: string = chalk.magenta.underline.italic(
  ` Welcome "${userName}" in Words Counter App: `
);
await slowAnimate(chalk.magenta.bold(`\n<------------------------------${appName}--------------------------------->\n\n`));

// -----------------------------Main Function -----------------------------

async function wordCounter() {

  let wordCounter = true;
  while (wordCounter) {
    const ans = await inquirer.prompt([
      {
        name: `sentence`,
        type: `input`,
        message: chalk.yellowBright(`Enter your sentence to count the words:`),
      },
    ]);

    const words = ans.sentence.trim().split(` `);
    console.log(words);
    await animateText(chalk.magenta(`Your sentence words count is: ${words.length}\n`));

    const confirmation_ans = await inquirer.prompt({
      name: `user_confirmation`,
      type: `confirm`,
      message: chalk.yellowBright(
        `You want to count the occurrences of your words again..? `
      ),
      default: true,
    });

    if (confirmation_ans.user_confirmation == false) {
      wordCounter = false;
    }
  }
  await animateText(
    chalk.yellow.underline(
      `\n\t\t Thank you "${userName}" for using the Words Counter App. Have a great day!\n`
    )
  );

  let develporName = chalk.magenta.underline` BILAL WALEED `;
  await slowAnimate(chalk.magenta.bold(`\n<----------------------------------Developer Name: ${develporName}-------------------------------------->\n`));
  process.exit();
}
wordCounter();
