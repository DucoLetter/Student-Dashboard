import React, { Component } from "react";
import Assigments from "../Data/Assignments";
import WincThemee from "../Data/WincTheme";
import StudentDataDifficulty from "../Data/StudentDataDifficulty";
import StudentDataEnjoyment from "../Data/StudentDataEnjoyment";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
  VictoryLabel,
  VictoryLegend,
} from "victory";

const wincTheme = WincThemee;
const alleDifficulty = StudentDataDifficulty;
const alleEnjoyment = StudentDataEnjoyment;

const getDifficultySandra = () => alleDifficulty[7].splice(0, 1); //De 7 staat voor Sandra
const getEnjoymentSandra = () => alleEnjoyment[7].splice(0, 1);
let assignmentRatingAverage = Assigments;

assignmentRatingAverage = assignmentRatingAverage.map((avg) => ({
  assignment: avg.assignment,
  difficultyRating: getDifficultySandra()[0],
  enjoymentRating: getEnjoymentSandra()[0],
}));

const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(
  (avg) => ({
    assignment: avg.assignment,
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: `Opdracht ${
      avg.assignment
    }, difficultyRating: ${avg.difficultyRating.toFixed(
      1
    )}, enjoymentRating: ${avg.enjoymentRating.toFixed(1)}`,
  })
);

class Sandra extends Component {
  constructor() {
    super();
    this.state = {
      difficulty: {
        data: { visibility: "visible" },
      },
      enjoyment: {
        data: { visibility: "visible" },
      },
    };
  }

  render() {
    let wordDisplay;
    if (this.state.difficulty.data.visibility === "visible") {
      wordDisplay = "on";
    } else {
      wordDisplay = "off";
    }
    let wordDisplayEnjoyment;
    if (this.state.enjoyment.data.visibility === "visible") {
      wordDisplayEnjoyment = "on";
    } else {
      wordDisplayEnjoyment = "off";
    }

    const filterDifficulty = (event) => {
      if (event.target.checked) {
        this.setState({ difficulty: { data: { visibility: "visible" } } });
      } else {
        this.setState({ difficulty: { data: { visibility: "hidden" } } });
      }
      console.log(event.target.checked);
    };

    const filterEnjoyment = (event) => {
      if (event.target.checked) {
        this.setState({ enjoyment: { data: { visibility: "visible" } } });
      } else {
        this.setState({ enjoyment: { data: { visibility: "hidden" } } });
      }
    };

    return (
      <div className="chart">
        <h2>Sandra</h2>
        <figure>
          <label>
            <input
              type="checkbox"
              onClick={filterDifficulty}
              name="filter"
              value="difficulty"
              defaultChecked
            />
            Difficulty {wordDisplay}
          </label>
          <label>
            <input
              type="checkbox"
              onClick={filterEnjoyment}
              name="filter"
              value="enjoyment"
              defaultChecked
            />
            Enjoyment {wordDisplayEnjoyment}
          </label>
          <VictoryChart
            height={300}
            width={800}
            domainPadding={15}
            theme={wincTheme}
            padding={{ bottom: 150, left: 60, right: 120, top: 50 }}
            fontSize={20}
          >
            <VictoryLegend
              x={260}
              y={0}
              title="Legend"
              centerTitle
              orientation="horizontal"
              style={{ border: { stroke: "black" }, title: { fontSize: 12 } }}
              data={[{ name: "Difficulty" }, { name: "Enjoyment" }]}
            />

            <VictoryGroup offset={3}>
              <VictoryBar
                style={this.state.difficulty}
                labelComponent={<VictoryTooltip />}
                data={assignmentRatingAverageWithLabels}
                x="assignment"
                y="difficultyRating"
                tickFormat={assignmentRatingAverageWithLabels.map(
                  (avg) => avg.assignment
                )}
                animate={({ duration: 1000 }, { easing: "sinIn" })}
              />

              <VictoryBar
                style={this.state.enjoyment}
                labelComponent={<VictoryTooltip />}
                data={assignmentRatingAverageWithLabels}
                x="assignment"
                y="enjoymentRating"
                tickFormat={assignmentRatingAverageWithLabels.map(
                  (avg) => avg.assignment
                )}
                alignment="start"
                animate={({ duration: 1000 }, { easing: "sinIn" })}
                padding={{ left: -160 }}
                margin={{ left: -160 }}
              />
            </VictoryGroup>
            <VictoryAxis
              tickFormat={assignmentRatingAverageWithLabels.map(
                (avg) => avg.assignment
              )}
              style={{ tickLabels: { fontSize: 6 } }}
              tickLabelComponent={
                <VictoryLabel angle={40} textAnchor="start" />
              }
            />
            <VictoryAxis dependentAxis />
          </VictoryChart>
        </figure>
        <div className="boxWhiteStudents">
          <table className="tableInformationStudents">
            <thead>
              <th>
                <h3>Student Details</h3>
              </th>
            </thead>
            <tbody>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Sandra Peck</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>sandra.peck@example.com</td>
                </tr>
                <tr>
                  <td>Phone number</td>
                  <td>(088)-262-1782</td>
                </tr>
                <tr>
                  <td>Leeftijd</td>
                  <td>28</td>
                </tr>
              </tbody>
            </tbody>
          </table>
          <div className="boxBlueStudents">
            <div className="imgboxStudents">
              <img
                src="https://randomuser.me/api/portraits/women/67.jpg"
                alt="profilepicture"
              ></img>
            </div>
            <h5>Sandra</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Sandra;
