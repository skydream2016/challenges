// // let myNumber = prompt('enter a number...');
// let myNumber = 15;
// console.log(`your number is "${myNumber}"`);
// const arr = [];
// let k = 1;
// while (k <= myNumber) {
//     arr.push(k);
//     k++;
// }
// console.log(arr);

// const [a, b, ...rest] = arr;

// const squaretrue = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         let squareOftwoNumbers = Math.sqrt(arr[i] + arr[j + 1]);
//         if (squareOftwoNumbers / Math.trunc(squareOftwoNumbers) === 1) {
//             squaretrue.push([arr[i], arr[j + 1]]);
//         }
//     }
// }
// // console.log(squaretrue);
// //////////////////////////////// check for no repeat

// const squareNearestTrue = [];
// for (var i = 0; i < squaretrue.length; i++) {
//     for (let j = 1; j < squaretrue.length; j++) {
//         let squareNearest = Math.sqrt(squaretrue[i][1] + squaretrue[j][0]);
//         // console.log(squareNearest);
//         if (squareNearest / Math.trunc(squareNearest) === 1) {
//                 squareNearestTrue.push(squaretrue[i]);
//                 squareNearestTrue.push(squaretrue[j]);
//             // }
//         }
//     }
// }

// // console.log(squareNearestTrue);
// const input = prompt('Enter your name');

// console.log(abbrevName(input));

// function abbrevName(input) {
//     function mySplitter(input, splitter) {
//         let arr = input.split(splitter);
//
//         return arr;
//     }

//     function myUpper(string) {
//         return string.toUpperCase();
//     }

//     const arr = mySplitter(input, ' ');

//     const nameLeter = mySplitter(arr[0], '');
//     const surnameLeter = mySplitter(arr[1], '');

//     return `${myUpper(nameLeter[0])}.${myUpper(surnameLeter[0])}.`;
// }
