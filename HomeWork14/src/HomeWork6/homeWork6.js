const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
  }];

const getSubjects = (student) => {
    return Object.keys(student.subjects).map((el) => {
        const re = /_/;
        let str = '';
        for (let i = 0; i < el.length; i++) {
            if (i == 0) {
                str += el[i].toUpperCase();
            } else {
                str += el[i];
            }
        }
        if (str.match(re)) {
            str = str.replace(re, ' ');
        }
        return str;
    });
}


const getAverageMark = (student) => {
    const deneralSum = Object.values(student.subjects).reduce((sum, markArr) => {
        let sumArr = 0;
        for (let mark of markArr) {
            sumArr += mark;
        }
        return sum += sumArr;
    }, 0);
    return deneralSum / Object.values(student.subjects).length;
}


const getStudentInfo = (student) => {
    const {course, name} = student;
    const objStudentInfo = {
        course,
        name,
        averageMark: getAverageMark(student),
    };
    return objStudentInfo;
}


const getBestStudent = (students) => {
    let maxMark = 0;
    return students.map(studentObj => getStudentInfo(studentObj)).reduce((name, el) => {
        if (maxMark < el.averageMark) {
            maxMark = el.averageMark;
            name = el.name;
        }
        return name;
    }, '');
}


export {students as students, getBestStudent as getBestStudent};
