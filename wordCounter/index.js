#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
};
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(`--------Lets Start Program------`);
    await sleep();
    rainbowTitle.stop();
}
welcome();
async function askQuestion() {
    let que = await inquirer.prompt([
        {
            type: "input",
            name: "str",
            message: chalk.rgb(187, 143, 286)(`please enter the paragraph:`)
        }
    ]);
    // convert a string into array
    const word_arr = que.str.split(" ");
    console.log(word_arr);
    console.log(`words length in paragraph is:${word_arr.length}`);
    //  character count
    const chr_withoutspaces = que.str.replace(/ /g, ""); // //g globally remove spaces in paragraph
    console.log(chr_withoutspaces);
    console.log(`Characters in paragraph:${chr_withoutspaces.length}`);
}
// askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var playAgain = await inquirer.prompt([{
                type: "input",
                name: "restart",
                message: chalk.rgb(187, 143, 286)(`Do you want to restart? press y or n`)
            }]);
    } while (playAgain.restart === "y");
}
startAgain();
