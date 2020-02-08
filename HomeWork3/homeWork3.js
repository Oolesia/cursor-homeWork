const maxNumber = '1543712';
const getMaxDigit = (a) => {
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
const pow = (Num, exp) => {
    let resultPow = Num;
    if (exp === 0) {
        resultPow = 1;
    } else {
        for (let i = 1; i < exp; i++) {
            resultPow *= Num;
        }
    }
    return resultPow;
}

const Name = "oLEsiA";
const formatName = (Name) => {
    let formatedName = "";
    let newLetter = "";
    for (let i = 0; i < Name.length; i++) {
        if (i === 0) {
            newLetter = Name[0].toUpperCase();
        } else {
            newLetter = Name[i].toLowerCase();
        }
        formatedName += newLetter;
    }
    return formatedName;
}

const fullSalary = 10000;
const getSalaryWithoutTax = (fullSalary) => {
    const taxPercent = 19.5;
    let salaryWithoutTax = fullSalary - fullSalary * taxPercent / 100;
    return salaryWithoutTax;
}

const minNam = 5;
const maxNam = 10;
const getRandomNumber = (N, M) => {
    let randomNumber = Math.round(N + Math.random() * (M - N));
    return randomNumber;
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

const sumBeforeConvert = '260uah';
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
            return "не паліндром";
        }
    }
    return "паліндром";
}

const phrase = 'Бисквит был очень нежный';
const deleteDuplicateLetter = (word) => {
    word = word.toLowerCase();
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
            newWord += word[i];
        }
    }
    return newWord;
}

document.write(`Функція 1| вхідні дані - ${maxNumber} | результат = ${getMaxDigit(maxNumber)} \n
Функція 2| вхідні дані - ${powNum}, ${exp} | результат = ${pow(powNum, exp)} \n
Функція 3| вхідні дані - ${Name} | результат = ${formatName(Name)} \n
Функція 4| вхідні дані - ${fullSalary} | результат = ${getSalaryWithoutTax(fullSalary)} \n
Функція 5| вхідні дані - ${minNam}, ${maxNam} | результат = ${getRandomNumber(minNam, maxNam)} \n
Функція 6| вхідні дані - ${letter}, ${word} | результат = ${countLetter(letter, word)} \n
Функція 7| вхідні дані - ${sumBeforeConvert} | результат = ${convertCurrency(sumBeforeConvert)} \n
Функція 8| вхідні дані - ${countPassword} | результат = ${getRandomPassword(countPassword)} \n
Функція 9| вхідні дані - ${letter}, ${word} | результат = ${deleteLetters(letter, word)} \n
Функція 10| вхідні дані - ${palyndromWord} | результат = ${isPalyndrom(palyndromWord)} \n
Функція 11| вхідні дані - ${phrase} | результат = ${deleteDuplicateLetter(phrase)} \n`);
