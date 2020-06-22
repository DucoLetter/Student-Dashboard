import DataStudents from "./DataStudents";

const students = DataStudents.map((element) => element.username);
const studentsList = students.filter(
  (item, index) => students.indexOf(item) === index
);

const studentDifficulty = [];
studentsList.forEach((element) => {
  for (let i = 0; i < DataStudents.length; i++) {
    if (DataStudents[i].username === element) {
      studentDifficulty.push(DataStudents[i].difficulty);
    }
  }
});

const allDifficultyEvaluationPerAssignmentPerStudent = [];
studentsList.forEach(() => {
  allDifficultyEvaluationPerAssignmentPerStudent.push(
    studentDifficulty.splice(0, 56)
  );
});

export default allDifficultyEvaluationPerAssignmentPerStudent;
