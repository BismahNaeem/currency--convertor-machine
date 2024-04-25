#! /usr/bin/env  node
//SHABANG

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.blue.bold("\n \t welcome to mini4-currency converter\n"))



//list of currencies and their exchange rates
//make an object

let exchangeRate : any ={

//   key :value
    "USD":1,     //base currency
    "EUR":0.9,   //europeon currency
    "JYP":113,   //japnese currency
    "PKR":280,   //pakistan rupees
    "CAD":1.3,   //canadian dollar
}

//questions

let answer=await inquirer.prompt([{
       
    name:"from_currency",
    message:"select the currency to convert from",
    type:"list",
    choices:["USD","EUR","JYP","PKR","CAD"]
},
{
     name:"to_currency",
     type:"list",
     message:"select the currency to convert into",
     choices:["USD","EUR","JYP","PKR","CAD"]
},
{     name:"amount",
      type:"input",
      message:"Enter the amount to convert",

}

])

//currency convert formula

//make  variable named from amount
let from_amount =exchangeRate[answer.from_currency]

//make a variable named to amount
let to_amount =exchangeRate[answer.to_currency]

let amount = answer.amount



//formula of conversion
let baseAmount = amount /from_amount
let convertedAmount =baseAmount * to_amount


//ptint converted amount
console.log(`converted amount is = ${chalk.blue(convertedAmount.toFixed(3))}`);


