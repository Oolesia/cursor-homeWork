const maxNumber = '1543712';
function getMaxDigit(a){
  let resultMaxNum = a[0];
    for (let i=0; i<a.length; i++){
        if(resultMaxNum<a[i]){
            resultMaxNum = a[i];
        }
    }
    return resultMaxNum;
}

const powNum = 4;
const exp = 4;
function pow(Num, exp){
  let resultPow = Num;
  if(exp === 0){
    resultPow = 1;
  }else{
    for (let i=1; i<exp; i++){
            resultPow *= Num;
    }
  }
    return resultPow;
}

const Name = "oLEsiA";
function formatName(Name){
    let formatedName ="";
    let newLetter = "";
      for (let i=0; i<Name.length; i++){
        if(i===0){
          newLetter = Name[0].toUpperCase();
        }else{
          newLetter = Name[i].toLowerCase();
        }     
        formatedName += newLetter;
      }
    return formatedName;
}

const fullSalary = 10000;
function getSalaryWithoutTax(fullSalary){
  const taxPercent = 19.5;
  let salaryWithoutTax = fullSalary - fullSalary * taxPercent/100;
  return salaryWithoutTax;
}

const minNam = 5;
const maxNam = 10;
function getRandomNumber(N, M){
  let randomNumber = Math.round(N + Math.random() * (M-N));
    return randomNumber;
}

const letter = 'f';
const word = 'faFlabFablfa';
function countLetter(letter, word){
  let count = 0;
  for(let i=0; i<word.length; i++){
    if(word[i].toLowerCase() == letter.toLowerCase()){
      count = count + 1;
    }
  }
    return count;
}

document.write(`Функція 1| вхідні дані - ${maxNumber}, результат = ${getMaxDigit(maxNumber)} \n
Функція 2| вхідні дані - ${powNum}, ${exp}, результат = ${pow(powNum, exp)} \n
Функція 3| вхідні дані - ${Name}, результат = ${formatName(Name)} \n
Функція 4| вхідні дані - ${fullSalary}, результат = ${getSalaryWithoutTax(fullSalary)} \n
Функція 5| вхідні дані - ${minNam}, ${maxNam}, результат = ${getRandomNumber(minNam, maxNam)} \n
Функція 6| вхідні дані - ${letter}, ${word}, результат = ${countLetter(letter, word)} \n
`);













/*
function checkNumber(N) {
     while (+N != N || isNaN(parseInt(N, 10))) {
         alert("Це не число");
         N = prompt('Введіть ціле число');
     }
     return parseInt(N, 10);
 }*/

 //document.write(`Перше число ${startNum}, Друге число ${endNum}. \n Cума ${sum}`);
