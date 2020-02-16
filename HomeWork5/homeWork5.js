const getRandomArray = (length, min, max) => {
    let number = [];
    for (let i = 0; i < length; i++) {
        let rand = min + Math.random() * (max + 1 - min);
        number.push(Math.floor(rand));
    }
    return number
}
const numberArr = getRandomArray(5, 1, 5);

const getAverage = (...numbers) => {
    const intNum = numbers.filter(num => Number.isInteger(num));
    const result = intNum.reduce((sum, current) => sum + current, 0);
    return result / intNum.length;
}

const getMedian = (...numbers) => {
    const intNum = numbers.filter(num => Number.isInteger(num)).sort((a, b) => a - b);
    const median = (intNum.length) / 2;
    if (!Number.isInteger(median)) {
        return intNum[Math.floor(median)];
    } else {
        return (intNum[median] + intNum[median - 1]) / 2;
    }
}

const filterEvenNumbers = (...numbers) => {
    return numbers.filter(num => Number.isInteger(num)).filter(num => num % 2);
}

const countPositiveNumbers = (...numbers) => {
    const intNum = numbers.filter(num => Number.isInteger(num));
    return intNum.reduce((count, num) => {
        if (num > 0) {
            count++;
        }
        return count;
    }, 0)
}

const getDividedByFive = (...numbers) => {
    return numbers.filter(num => Number.isInteger(num)).filter(num => !(num % 5));
}

const replaceBadWords = (string) => {
    const arr = string.split(' ').map(word => {
        const re = /fuck|shit/i;
        if (word.match(re)) {
            return word.replace(re, '****');
        } else {
            return word;
        }
    });
    return arr.join(' ');
}

const divideByThree = (word) => {
    let str = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== ' ') {
            str = str + word[i];
        }
    }
    let arr = [];
    let strShort = '';
    for (let k = 0; k < str.length; k++) {
        strShort += str[k]
        if (!((k + 1) % 3)) {
            arr.push(strShort.toLowerCase());
            strShort = '';
        } else if (k == str.length - 1) {
            arr.push(strShort.toLowerCase());
        }
    }
    return arr;
}
document.writeln(`getRandomArray - ${numberArr} \n
  getAverage - ${getAverage(1, 2, 3, 4, 5, 0.8, 6)} \n
  getMedian - ${getMedian(1, 2, 1, 2, 2.5)} \n
  filterEvenNumbers - ${filterEvenNumbers(1, 2, 1, 2, 2, 5, 5)}\n
  countPositiveNumbers - ${countPositiveNumbers(1.8, 2, 7, 1, -2, -2, -5, -5)}\n
  getDividedByFive - ${getDividedByFive(6, 2, 55, 5, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}\n
  replaceBadWords - ${replaceBadWords("Are you fucking kidding? Holy shit! It's bullshiT!")}\n
  divideByThree - ${divideByThree("Comm ander")}
  `);
