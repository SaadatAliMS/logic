#! usr/bin/env node
import inquirer from "inquirer";

interface ansType {
    userId:string,
    userPin:number,
    actype:string,
    transactype:string,
    amount:number

};
const answer:ansType=await inquirer.prompt([{
    type:"input",
    name:"userId",
    message:"Kindly Enter Your ID"
},
{
    type:"number",
    name:"userPin",
    message:"Please enter your PIN"
},{
    type:"list",
    name:"actype",
    choices:["Current","Saving"],
    message:"Slecet Your account type",
    
},
{
    type:"list",
    name:"transactype",
    choices:["Cash Withdrawl","Fast Cash"],
    message:"Select your transaction type",
    when(answer) {
        return answer.actype;
    }
},

    {
        type:"list",
        name:"amount",
        choices:[1000,2000,10000,20000,30000,50000],
        message:"Select your transaction amount",
        when(answer) {
            return answer.transactype==="Fast Cash"
        }
},
{
    type:"number",
    name:"amount",
    message:"Select your transaction amount",
    when(answer) {
        return answer.transactype==="Cash Withdrawl"
    }
}
]);
if (answer.userId && answer.userPin){
    const balance= Math.floor(Math.random()*1000000);
    console.log(balance);
    if (answer.amount <= balance) {
        const remainingBalance=balance-answer.amount;
        console.log("Your Remainig Balance is:",remainingBalance);
        
    }else{
        console.log("Insufficient Balance")
    }
    
}