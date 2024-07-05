#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 8765;
console.log(chalk.blue("\n\t Wellcome to Ume Tehreem ATM-Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message:chalk.yellow( "Enter your pin code")

    }
])
if(pinAnswer.pin === myPin){
    console.log(chalk.green("\npin is correct, login successfully\n"))
   
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdrow", "check balance", ]
        }
    ])
    if (operationAns.operation === "withdrow")
    {
        let withdrawAns = await inquirer.prompt([
            {
                name: "widthdrawMethod",
                type: "list",
                message: "select a widthdrawal method",
                choices: ["Fast cash", "Enter amount"]
            }
        ]);
        
    if(withdrawAns.widthdrawMethod === "Fast cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "select amoount",
                choices: [1000, 2000, 5000, 8000,10000]
         }
        ])
        if(fastCashAns.fastCash > myBalance){
            console.log("insufficient balance");
    }
        else {
            myBalance -= fastCashAns.fastCash
            console.log(`${fastCashAns.fastCash} widthdrow successfully`);
            console.log(`Your remaining balance :${myBalance}`);
        }}
        else if(withdrawAns.widthdrawMethod === "Enter amount"){
            let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdrow"
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
    else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdrow successfully`);
        console.log(`your remaining balance is: ${myBalance}`);
    }
    }
    else if(operationAns.operation === "check balance"){
        console.log(`your account balance is: ${myBalance}`);
}}
}
else{
    console.log("pin is incorrect, try again ");
}