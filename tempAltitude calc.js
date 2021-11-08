"use strict";

const temps = ["error", 3, -2, 6, 17, "error", -27, 0, 32];
// const temps = [-123, -12, -34, -45, -3, 0, 23];

const calcTempAmplitude = function (temps) {
    // let min = temps[0];
    // let max = temps[0];
    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        // if (typeof curTemp !== 'number') continue;
        // console.log(typeof curTemp);
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude(temps);
console.log(amplitude);
