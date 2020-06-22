import DataStudents from "./DataStudents";

//Array maken van alle assignments
const assignments = DataStudents.map((element) => element.assignment);
const assignmentList = assignments.filter(
  (item, index) => assignments.indexOf(item) === index
);

//Array van de 560beoordelingen voor enjoyment
//(op volgorde: eerste 10 beoordelingen zijn van de eerste assignment, de volgende 10 van de 2e assignment etc.)
const enjoymentEvaluation = [];
assignmentList.forEach((element) => {
  for (let i = 0; i < DataStudents.length; i++) {
    if (DataStudents[i].assignment === element) {
      enjoymentEvaluation.push(DataStudents[i].enjoyment);
    }
  }
});

//56 arrays, per array 10 enjoymentEvaluation(dus per array("opdracht"), 10 rating want 10 studenten)
const allEnjoymentEvaluationPerAssignment = [];
assignmentList.forEach(() => {
  allEnjoymentEvaluationPerAssignment.push(enjoymentEvaluation.splice(0, 10)); //10veranderen met "studentenaantallen voor flexibiliteit later".
});

//56 arrays, elk heeft gemiddeld van enjoyment van de opdracht
let averageEnjoyment = [];
for (let i = 0; i < allEnjoymentEvaluationPerAssignment.length; i++) {
  let totalEnjoyment = allEnjoymentEvaluationPerAssignment[i].reduce(
    (acc, element) => (acc, element) + acc
  );
  let averageEnjoyment1 = totalEnjoyment / 10; //10veranderen voor studentenAantallen voor flexibiliteit
  averageEnjoyment.push(averageEnjoyment1);
}

export default averageEnjoyment;
