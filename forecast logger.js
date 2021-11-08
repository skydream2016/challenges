'use strict';

console.log('Hi its Forecast logger!!');

// result: "... 17° C in 1 days ... 21° C in 2 days ... 23° C in 3 days ..."

const arr_1 = [17, 21, 23];
const arr_2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `... ${arr[i]}° C in ${arr.indexOf(arr[i]) + 1} days `;
    }
    return console.log(str);
};
printForecast(arr_2);
