import DataStudents from "./DataStudents";

const students = DataStudents.map((element) => element.username);
const studentsList = students.filter(
  (item, index) => students.indexOf(item) === index
);

const studentEnjoyment = [];
studentsList.forEach((element) => {
  for (let i = 0; i < DataStudents.length; i++) {
    if (DataStudents[i].username === element) {
      studentEnjoyment.push(DataStudents[i].enjoyment);
    }
  }
});

const allEnjoymentEvaluationPerAssignmentPerStudent = [];
studentsList.forEach(() => {
  allEnjoymentEvaluationPerAssignmentPerStudent.push(
    studentEnjoyment.splice(0, 56)
  );
});

export default allEnjoymentEvaluationPerAssignmentPerStudent;
