 function checkNumber(N) {
     while (+N != N || isNaN(parseInt(N, 10))) {
         alert("Це не число");
         N = prompt('Введіть ціле число');
     }
     return parseInt(N, 10);
 }
 let startNum = prompt('Введіть перше число', '1');
 startNum = checkNumber(startNum);

 let endNum = prompt('Введіть друге число', '10');
 endNum = checkNumber(endNum);

 let missEvenNum = confirm("Парні пропускаємо?");
 if (missEvenNum == true) {
     document.writeln("Парні числа пропускаємо ")
 } else {
     document.writeln("Парні числа не пропускаємо ");
 }

 let sum = 0;
 if (missEvenNum == false) {
     for (let i = +startNum; i <= +endNum; i++) {
         sum = sum + i
     }
 } else {
     for (let i = +startNum; i <= +endNum; i++) {
         if (i % 2 != 0) {
             sum = sum + i
         }
     }
 }
 document.write(`Перше число ${startNum}, Друге число ${endNum}. \n Cума ${sum}`);
