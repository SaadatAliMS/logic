#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

const usdtoPkr=270;
const pkrtoUsd=0.0037;
const eurotoPkr=250;
const pkrtoEuro=0.004;
const eurotoUsd=1.05;
const usdtoEuro=0.95;
let repeat=false
async function converter() {
    do {
        let ans:{CurrencyFrom:string,CurrencyTo:string,Amount:number}=await inquirer.prompt([{
            name:"CurrencyFrom",
            type:"list",
            choices:["USD","PKR","Euro"],
            message:"slect from which currency you want to convert"
        },
        {
            name:"CurrencyTo",
        type:"list",
        choices:["USD","PKR","Euro"],
        message:"slect to which currency you want to convert"
        },
        {
            name:"Amount",
        type:"number",
        message:"Enter Amount"
    }
    ]);
    //  console.log(ans.amount);
    switch(ans.CurrencyFrom){
         case "USD":
            if(ans.CurrencyTo==="PKR"){
                let amount=ans.Amount * usdtoPkr;
                console.log(amount);
            }
            else if (ans.CurrencyTo==="Euro"){
                let amount=ans.Amount * usdtoEuro;
                console.log(amount);
            }
            else{
                console.log(ans.Amount);
    
            }
            break;
            case "PKR":
            if(ans.CurrencyTo==="USD"){
                let amount=ans.Amount * pkrtoUsd;
                console.log(amount);
            }
            else if (ans.CurrencyTo==="Euro"){
                let amount=ans.Amount * pkrtoEuro;
                console.log(amount);
            }
            else{
                console.log(ans.Amount);
    
            }
            break;
            case "Euro":
            if(ans.CurrencyTo==="PKR"){
                let amount=ans.Amount * eurotoPkr;
                console.log(amount);
            }
            else if (ans.CurrencyTo==="USD"){
                let amount=ans.Amount * eurotoUsd;
                console.log(amount);
            }
            else{
                console.log(ans.Amount);
    
            }
            break;
    }
    repeat=await Repeat();
        
    } 
    while (repeat===true);
}
async function Repeat() {
    let again=await inquirer.prompt([{
        name:"repeat",
        type:"list",
        choices:['y','n'],
        message:"Do you want to Repaet?Press y for yes and n for no"
    }]);
    return again.repeat==='y'? true:false;
    
}
converter();
