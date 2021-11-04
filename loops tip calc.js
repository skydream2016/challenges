'use strict'
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const bills2 = [100, 10, 1000];
const tips = [];
const totals = [];
 
const calcTip = function (bill) {
    return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bill.length; i++) {
    const tip = calcTip(bill[i]);
    tips.push(tip);
    totals.push(bill[i] + tip);
};

console.log(bill, tips, totals);


const calcAvrg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAvrg(totals));
console.log(calcAvrg(tips));

