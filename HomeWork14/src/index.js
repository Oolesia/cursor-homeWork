const functionBlock = document.getElementById('function-block');
import generalPriceOfInt from './HomeWork1/homeWork1.js';
import Suma from './homeWork2/homeWork2.js';
import {deleteDuplicateLetter} from './homeWork3/homeWork3.js';
import * as pairsThems from './homeWork4/homeWork4.js';
import {getMedian} from './homeWork5/homeWork5.js';
import * as bestStud from './homeWork6/homeWork6.js';
import * as taxes from './homeWork7/homeWork7.js';
import Student from './homeWork8/homeWork8.js';
import {generateBlocks} from './homeWork9/homeWork9.js';
import sound from './homeWork10/homeWork10.js';
import getRandomChinese from './homeWork11/main.js';
import getPersons from './homeWork12/main.js';
import createIdGenerator from './homeWork13/main.js';

import './homeWork9/style.css';
import './homeWork10/style.css';
import './homeWork12/style.css';

import description9 from './homeWork9/index.html';
import description10 from './homeWork10/index.html';
import description12 from './homeWork12/index.html';

import InstagramIcon from "./6b95614d409b614919218da5de6b7a2d.png";

const hw1Btn = document.getElementById('hw1');
const hw2Btn = document.getElementById('hw2');
const hw3Btn = document.getElementById('hw3');
const hw4Btn = document.getElementById('hw4');
const hw5Btn = document.getElementById('hw5');
const hw6Btn = document.getElementById('hw6');
const hw7Btn = document.getElementById('hw7');
const hw8Btn = document.getElementById('hw8');
const hw9Btn = document.getElementById('hw9');
const hw10Btn = document.getElementById('hw10');
const hw11Btn = document.getElementById('hw11');
const hw12Btn = document.getElementById('hw12');
const hw13Btn = document.getElementById('hw13');

hw1Btn.addEventListener('click', function () {
    console.log(`HW1 - Загальна вартість (сума цілих частин) - ${generalPriceOfInt} ${InstagramIcon}`);
    functionBlock.innerHTML = `<img id='InstagramIcon' src=${InstagramIcon}>`;
});

hw2Btn.addEventListener('click', function () {
    Suma();
});
hw3Btn.addEventListener('click', function () {
    console.log(`HW3 - Видалення дублікатів букв 'Бисквит был очень нежный' = ${deleteDuplicateLetter('Бисквит был очень нежный')}`);
});
hw4Btn.addEventListener('click', function () {
    console.log(`HW4 - Студенти і теми робіт - ${pairsThems.getPairsWithThemes(pairsThems.pairs, pairsThems.themes)}`);
});
hw5Btn.addEventListener('click', function () {
    console.log(`HW5 - getMedian(1, 2, 1, 2, 2.5) - ${getMedian(1, 2, 1, 2, 2.5)}`);
});
hw6Btn.addEventListener('click', function () {
    console.log(`HW6 - Найкращий студент - ${bestStud.getBestStudent(bestStud.students)}`);
});
hw7Btn.addEventListener('click', function () {
    console.log(`HW7 -В країні litva в середньому налогів платять - ${taxes.getMiddleTaxes.call(taxes.litva)}`);
});
hw8Btn.addEventListener('click', function () {
    const student1 = new Student('Вищої школи МДК', 1, 'Остап Родоманський Бендер');
    console.log(`HW8 - Інформація: ${student1.getInfo()}, оцінки студента - ${student1.studentMarks}`);
});
hw9Btn.addEventListener('click', function () {
    functionBlock.innerHTML = description9;
    var timerId = setInterval(() => {
        generateBlocks()
    }, 1000);
    setTimeout(() => clearInterval(timerId), 3000);
});
hw10Btn.addEventListener('click', function () {
    functionBlock.innerHTML = description10;
    sound();

});
hw11Btn.addEventListener('click', function () {
    getRandomChinese(4).then((res) => {
        console.log(`HW11 - ${res}`);
    });
});
hw12Btn.addEventListener('click', function () {
    functionBlock.innerHTML = description12;
    getPersons();
    
});
const idGenerator = createIdGenerator();
hw13Btn.addEventListener('click', function () {
    idGenerator.next();
});