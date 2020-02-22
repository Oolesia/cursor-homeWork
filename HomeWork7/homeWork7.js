const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};

function getMyTaxes(salary) {
    return this.tax * salary;
}
const country = litva;
console.log(`В країні litva заплатите налогів - ${getMyTaxes.call(litva, 1000)}`);

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}
console.log(`В країні litva в середньому налогів платять - ${getMiddleTaxes.call(litva)}`);

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(`В країні litva всього налогів платять - ${getTotalTaxes.call(litva)}`);

function getMySalary() {
    const min = 1500;
    const max = 2000;
    const salary = Math.floor(Math.random() * (max - min)) + min;
    const taxes = getMyTaxes.call(this, salary);
    const profit = salary - taxes;
    return {
        salary,
        taxes,
        profit
    };
}


let timerId = setInterval(() => console.log(getMySalary.call(country)), 10000);
setTimeout(() => clearInterval(timerId), 60000);
