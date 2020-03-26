export default class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.present = true;
    }

    getInfo() {
        return `Студент ${this.course}го курса ${this.university}, ${this.fullName}`;
    }

    get studentMarks() {
        if (this.present) {
            return this.marks;
        } else return null
    }

    set studentMarks(mark) {
        if (this.present) {
            this.marks.push(mark);
            return this.studentMarks;
        } else return null;
    }

    getAverageMark() {
        return (this.marks.reduce((sum, mark) => (sum += mark), 0) / this.marks.length).toFixed(2);
    }

    dismiss() {
        this.present = false;
        return 'студента виключили';
    }

    recover() {
        this.present = true;
        return 'студента відновили';
    }
}

class BudgetStudent extends Student {

    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.marks = [4, 5, 4, 3];
        this.present = true;
        this.setInterval();
    }

    getScholarship() {
        if ((!(this.getAverageMark() < 4)) && (this.present)) {
            console.log('Ви отримали 1400 грн. степендії');
        }
    }

    setInterval() {
        setInterval(() => this.getScholarship(), 30000);
    }
}

/*const student1 = new Student('Вищої школи МДК', 1, 'Остап Родоманський Бендер');
console.log(`Інформація: ${student1.getInfo()} \n
  оцінки студента - ${student1.studentMarks} \n
  студент отримав нову оцінку - ${student1.studentMarks = 5}, оцінки - ${student1.studentMarks} \n
  середня оцінка студента ${student1.getAverageMark()} \n
  ${student1.dismiss()}\n
  студент отримав нову оцінку - ${student1.studentMarks} \n
  ${student1.recover()}\n
  студент отримав нову оцінку - ${student1.studentMarks = 3}, оцінки - ${student1.studentMarks}`);
const student2 = new BudgetStudent('Школи 125', 5, 'Ivan ivanov')
console.log(`Інформація: ${student2.getInfo()}, \n
  середня оцінка студента ${student1.getAverageMark()}`);*/
