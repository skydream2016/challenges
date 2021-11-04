console.log('BMI comparison by object methods');

const John = {
fullName: 'John Smith',
mass: 92,
height: 1.95,

calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
    },

logToConsole: function () {
    console.log(`${this.fullName} weight is ${this.mass}, BMI is ${this.calcBMI()}`);
}

};

const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
},

logToConsole: function () {
    console.log(`${this.fullName} weight is ${this.mass}, BMI is ${this.calcBMI()}`);
}
};

Mark.logToConsole();
John.logToConsole();

console.log(`${Mark.fullName} BMI (${Mark.BMI}) is ${Mark.BMI > John.BMI ? 'bigger than' : 'less than'} ${John.fullName} BMI ${John.BMI}!! He need to eat less fastfood`);