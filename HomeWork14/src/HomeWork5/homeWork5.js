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

export const getMedian = (...numbers) => {
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

