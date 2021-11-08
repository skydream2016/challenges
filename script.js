const anyArr = [1, 2, 3, 4, 5, 6];
const anyArrDec = [10, 20, 30, 40, 50, 60];

function array(arr) {
    const newStr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[0] || arr[i] == arr[arr.length - 1]) {
            continue;
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const x = array(anyArr);
console.log(x);
