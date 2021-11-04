const data1 = [[44, 23, 71], [65, 54, 49]]; //Dolphins Koalas, average of data1[0] 46 data1[1] 56 
const data2 = [[85, 54, 41], [23, 34, 27]]; //Dolphins Koalas, average of data2[0] 60 data2[1] 28 

function dataSwitcher(data) { 
    const calcAverage = (a, b, c) => (a + b + c) / 3;

    const averDolphins = calcAverage(data[0][0], data[0][1], data[0][2]); 
    console.log(`Average score of Dolphins is: ${averDolphins}!`);
    const averKoalas = calcAverage(data[1][0], data[1][1], data[1][2]); 
    console.log(`Average score of Koalas is: ${averKoalas}!`);

    function checkWinner(averDolphins, averKoalas) {
        if (averDolphins / 2 >= averKoalas) {
            console.log(`Dolphins win (${averDolphins} vs. ${averKoalas})`);
        } else if (averKoalas / 2 >= averDolphins ) {
            console.log(`Koalas win (${averKoalas} vs. ${averDolphins})`)
        } else {
            console.log(`Both teams are loosers`);
        }
    }  
    checkWinner(averDolphins, averKoalas);
}
dataSwitcher(data2);

///without learning arrays on this course