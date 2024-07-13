#! \usr\bin\env node

import inquirer from "inquirer";
import chalk from "chalk";

// Print Welcome Message
console.log(chalk.blue("\n \tWelcome to \'Mehak ishrat\' - ATM machinep\n"));

// initialize user Balance and Pin code
let myBalance = 15000;
let myPin = 2001;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
])
if(pinAnswer.pin === myPin){
    console.log(chalk.green("\nPin is correct, Login Successfully!\n"));
    
    let OperationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.yellow("\nselect an operation\n"),
            choices: ["Withdraw Amount", "Check Balance"]
        }  
    ])

    if(OperationAns.operation === "Withdraw Amount"){
        let withdrwAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: chalk.yellow("\nSelect a withdrawal method\n"),
                choices: ["Fast cash", "Enter amount"]
            }
        ])

        if(withdrwAns.withdrawMethod === "Fast cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: chalk.yellow("\nSelect Amount\n"),
                    choices: [1000, 2000, 5000, 10000, 15000, 20000]
                }
            ])
            if(fastCashAns.fastCash > myBalance){
                console.log(chalk.red("\nInsufficient Balance\n"));
            }
            else{myBalance -= fastCashAns.fastCash;
                console.log(chalk.green(`\n${fastCashAns.fastCash} withdraw successfully\n `));
                console.log(chalk.magenta(`\n\t Your remaining Balance is: ${myBalance}\n`));
            }
        }
        else if(withdrwAns.withdrawMethod === "Enter amount"){
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk.yellow("\nEnter the amount to withdrawl\n")
                }
            ])
            if(amountAns.amount > myBalance){
                console.log(chalk.red("\nInsufficient Balance\n"));
            }
            else{
                myBalance -= amountAns.amount;
                console.log(chalk.green(`\n${amountAns.amount} withdraw successfully\n`));
                console.log(chalk.magenta(`\t\nYour Remaining balance is: ${myBalance}\n`));
            }
        }
   }
   else if(OperationAns.operation === "Check Balance"){
    console.log(chalk.green(`\nYour account Balance is: ${myBalance}\n`));
   }
}
else{
    console.log(chalk.red("Pin is incorrect, try again!"));
};
