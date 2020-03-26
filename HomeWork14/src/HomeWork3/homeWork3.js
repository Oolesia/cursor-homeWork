const maxNumber = 1543712;
const getMaxDigit = (a) => {
    a = String(a);
    let resultMaxNum = a[0];
    for (let i = 0; i < a.length; i++) {
        if (resultMaxNum < a[i]) {
            resultMaxNum = a[i];
        }
    }
    return resultMaxNum;
}

const powNum = 4;
const exp = 4;
const pow = (num, exp) => {
    let resultPow = num;
    if (exp === 0) {
        resultPow = 1;
    } else {
        for (let i = 1; i < exp; i++) {
            resultPow *= num;
        }
    }
    return resultPow;
}

const name = "oLEsiA";
const formatName = (name) => {
    let formatedName = "";
    let newLetter = "";
    for (let i = 0; i < name.length; i++) {
        if (i === 0) {
            newLetter = name[0].toUpperCase();
        } else {
            newLetter = name[i].toLowerCase();
        }
        formatedName += newLetter;
    }
    return formatedName;
}

const fullSalary = 10000;
const getSalaryWithoutTax = (fullSalary) => {
    const taxPercent = 19.5;
    return fullSalary - fullSalary * taxPercent / 100;
}

const minNam = 5;
const maxNam = 10;
const getRandomNumber = (n, m) => {
    return Math.round(n + Math.random() * (m - n));
}

const letter = 'f';
const word = 'faFlabFablfa';
const countLetter = (letter, word) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() == letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

const deleteLetters = (letter, word) => {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() != letter.toLowerCase()) {
            newWord += word[i];
        }
    }
    return newWord;
}

const sumBeforeConvert = '200$';
const convertCurrency = (sumBeforeConvert) => {
    let sumAfterConvert = '';
    let i;
    for (i = 0; i < sumBeforeConvert.length; i++) {
        if (!isNaN(Number(sumBeforeConvert[i]))) {
            sumAfterConvert = sumAfterConvert + sumBeforeConvert[i];
        } else {
            break;
        }
    }
    if (i === sumBeforeConvert.length - 1 && sumBeforeConvert[i] == '$') {
        return sumAfterConvert * 25 + 'uah';
    } else if (i == sumBeforeConvert.length - 3 && (sumBeforeConvert[i] + sumBeforeConvert[i + 1] + sumBeforeConvert[i + 2]).toLowerCase() === 'uah') {
        return sumAfterConvert / 25 + '$';
    } else {
        return ('дані введені не коректно');
    }
}

const countPassword = 4
const getRandomPassword = (n = 8) => {
    let randomPassword = '';
    const parametr = 10;
    for (let i = 0; i < n; i++) {
        randomPassword += Math.floor(Math.random() * parametr);
    }
    return randomPassword;
}

const palyndromWord = 'Аргентина манит негра';
const isPalyndrom = (word) => {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== ' ') {
            newWord += word[i];
        }
    }
    word = newWord.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
}

const phrase = 'Бисквит был очень нежный';
export const deleteDuplicateLetter = (word) => {
    word = word.toLowerCase();
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
            newWord += word[i];
        }
    }
    return newWord;
}

