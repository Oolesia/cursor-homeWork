 function checkNumber(N) {
     while (isNaN(Number(N))) {
         alert("Це не число");
         N = prompt('Введіть ціле число');
     }
     return parseInt(N, 10);
 }
 let startNum = prompt('Введіть перше число', '1');
 startNum = checkNumber(startNum);

 let endNum = prompt('Введіть друге число', '10');
 endNum = checkNumber(endNum);

 if (startNum > endNum) {
     document.write(`Перше число ${startNum} більше за друге число ${endNum}. \n
    Cуму не шукаємо!!!`);
 } else {
     const missEvenNum = confirm("Парні пропускаємо?");
     let sum = 0;
     if (!missEvenNum) {
         document.writeln("Парні числа не пропускаємо ");
         for (let i = +startNum; i <= +endNum; i++) {
             sum = sum + i
         }
     } else {
         document.writeln("Парні числа пропускаємо ")
         for (let i = +startNum; i <= +endNum; i++) {
             if (i % 2 != 0) {
                 sum = sum + i
             }
         }
     }
     document.write(`Перше число ${startNum}, Друге число ${endNum}. \n Cума ${sum}`);
 }
