const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {
    return [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]];
}

const getPairsWithThemes = (pairs, themes) => {
    let studentAndThemes = [];
    for (let i = 0; i < pairs.length; i++) {
        studentAndThemes.push([pairs[i].join(' и '), themes[i]]);
    }
    return studentAndThemes;
}
const getMarksToStudent = (studentArr, marksArr) => {
    let studentsMarks = [];
    for (let i = 0; i < studentArr.length; i++) {
        studentsMarks.push([studentArr[i], marksArr[i]]);
    }
    return studentsMarks;
}
const getRandonMarks = (pairsArr) => {
    const RandonMarks = Math.floor(Math.random() * 5) + 1;
    const studentsMarks = [];
    for (let i = 0; i < pairsArr.length; i++) {
        studentsMarks.push([...pairsArr[i], RandonMarks]);
    }
    return studentsMarks;
}

const pairs = getPairs(students);
console.log(pairs);
const pairsWithThemes = getPairsWithThemes(pairs, themes);
console.log(pairsWithThemes);
console.log(getMarksToStudent(students, marks));
console.log(getRandonMarks(pairsWithThemes));
