import DataStudents from "./DataStudents";

//Array maken van alle assignments
const assignments = DataStudents.map((element) => element.assignment);
const assignmentList = assignments.filter(
  (item, index) => assignments.indexOf(item) === index
);

//Array van de 560beoordelingen voor difficulty
//(op volgorde: eerste 10 beoordelingen zijn van de eerste assignment, de volgende 10 van de 2e assignment etc.)
const difficultyEvaluation = [];
assignmentList.forEach((element) => {
  for (let i = 0; i < DataStudents.length; i++) {
    if (DataStudents[i].assignment === element) {
      difficultyEvaluation.push(DataStudents[i].difficulty);
    }
  }
});

//56 arrays, per array 10 difficultyEvaluation(dus per array("opdracht"), 10 rating want 10 studenten)
const allDifficultyEvaluationPerAssignment = [];
assignmentList.forEach(() => {
  allDifficultyEvaluationPerAssignment.push(difficultyEvaluation.splice(0, 10)); //10veranderen met "studentenaantallen voor flexibiliteit later".
});

//56 arrays, elk heeft gemiddeld van difficulty van de opdracht
let averageDifficulty = [];
for (let i = 0; i < allDifficultyEvaluationPerAssignment.length; i++) {
  let totalDifficulty = allDifficultyEvaluationPerAssignment[i].reduce(
    (acc, element) => (acc, element) + acc
  );
  let averageDifficulty1 = totalDifficulty / 10; //10veranderen voor studentenAantallen voor flexibiliteit
  averageDifficulty.push(averageDifficulty1);
}

export default averageDifficulty;
