'use strict';
// data bill = 275 40 430
// tips is 15% 50 < x < 300 other 20%
// consolo.log bill tips total 
// condition ? exprIfTrue : exprIfFalse

// Challenge 2
const bills = [125, 555, 44];

function billsSwitcher(bill) {
    function calctip(bill) {
        return  bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
    } 
    const tip = calctip(bill);
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`)
}

billsSwitcher(bills[0]);
billsSwitcher(bills[1]);
billsSwitcher(bills[2]);


// Challenge 4
function calcTip(bill) {
    return  bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
} 

const  tips = [calcTip(bills[0]),
               calcTip(bills[1]),
               calcTip(bills[2])];

const totals = [calcTip(tips[0]) + bills[0],
                calcTip(tips[1]) + bills[1],
                calcTip(tips[2]) + bills[2]];

console.log(bills);
console.log(tips);
console.log(totals);