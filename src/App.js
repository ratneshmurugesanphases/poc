import React, { useState, useCallback, useEffect } from "react";

import BarChart from "./rcv/components/bar-chart";
import Instructions from "./rcv/components/instructions";
import ButtonGroup from "./rcv/components/button-group";

import { getAppConfig, getInitialRoundObj } from "./rcv/config/app-config";
import {
  customColors,
  stepFivePurpleColors,
  stepFiveOrangeColors,
} from "./rcv/config/chart-config";

import "./rcv/styles.scss";

let appData = getAppConfig();

function App() {
  const [step, setStep] = useState({ value: 1, direction: "initial" });
  const round0 = getInitialRoundObj();
  const [ballotRounds, setBallotRounds] = useState([round0]);

  useEffect(
    (_) => {
      let ballotWinnerTimer;
      let updatedAppData;
      if (step.value >= 1 && step.value < 8) {
        console.log("UE", step);
        updatedAppData = appData.map((round) => {
          return {
            ...round,
            data: round.data.map((dataObj) => {
              // Second round effects
              if (dataObj.id === "r1-d4" && step.value === 3) {
                dataObj.label.show = false;
                dataObj.value = -1;
              }
              if (dataObj.id === "r1-d4" && step.value === 2) {
                dataObj.label.show = true;
                dataObj.value = 4;
              }

              // Third round effects
              if (dataObj.id === "r1-d3" && step.value === 4) {
                dataObj.label.show = false;
                dataObj.value = -1;
              }
              if (dataObj.id === "r1-d3" && step.value === 3) {
                dataObj.label.show = false;
                dataObj.value = 9;
              }

              // Fourth round effects
              if (dataObj.id === "r1-d6" && step.value === 5) {
                dataObj.label.show = false;
                dataObj.value = -1;
              }
              if (dataObj.id === "r1-d6" && step.value === 4) {
                dataObj.label.show = false;
                dataObj.value = 14;
              }
              if (dataObj.id === "r3-d6" && step.value === 4) {
                dataObj.label.show = false;
                dataObj.value = 1;
              }
              if (dataObj.id === "r3-d6" && step.value === 5) {
                dataObj.label.show = false;
                dataObj.value = 0;
              }

              // Fifth round effects
              if (dataObj.id === "r1-d2" && step.value === 6) {
                dataObj.label.show = false;
                dataObj.value = -1;
              }
              if (dataObj.id === "r1-d2" && step.value === 5) {
                dataObj.label.show = false;
                dataObj.value = 14;
              }
              if (dataObj.id === "r2-d2" && step.value === 6) {
                dataObj.label.show = false;
                dataObj.value = 0;
              }
              if (dataObj.id === "r2-d2" && step.value === 5) {
                dataObj.label.show = false;
                dataObj.value = 1;
              }

              if (dataObj.id === "r3-d2" && step.value === 6) {
                dataObj.label.show = false;
                dataObj.value = 0;
              }
              if (dataObj.id === "r3-d2" && step.value === 5) {
                dataObj.label.show = false;
                dataObj.value = 1;
              }

              return dataObj;
            }),
          };
        });

        if (step.value === 6) {
          ballotWinnerTimer = setTimeout(() => {
            updatedAppData = appData.map((round) => {
              return {
                ...round,
                hasVotingEnded: true,
                data: round.data.map((dataObj, index) => {
                  if (index === 1) {
                    dataObj.itemStyle = {
                      ...dataObj.itemStyle,
                      color: customColors[1],
                    };
                  }
                  if (index === 5) {
                    dataObj.itemStyle = {
                      ...dataObj.itemStyle,
                      color: customColors[5],
                    };
                  }
                  return dataObj;
                }),
              };
            });
            setBallotRounds(updatedAppData);
          }, 1700);
        }

        if (step.value === 5 && step.direction === "prev") {
          updatedAppData = appData.map((round, index) => {
            round.data[1] = {
              ...round.data[1],
              itemStyle: {
                color: stepFivePurpleColors[index],
              },
            };
            round.data[5] = {
              ...round.data[5],
              itemStyle: {
                color: stepFiveOrangeColors[index],
              },
            };
            return round;
          });
        }

        updatedAppData = appData.map((round, roundIndex) => {
          if (roundIndex > step.value - 1) {
            return {
              ...round,
              data: round.data.map((dataObj) => {
                return {
                  ...dataObj,
                  value: 0,
                  label:
                    step.value === 1
                      ? {
                          show: false,
                        }
                      : {
                          show: true,
                        },
                };
              }),
            };
          }
          return round;
        });
        setBallotRounds(updatedAppData);
      }

      return () => {
        clearTimeout(ballotWinnerTimer);
      };
    },
    [step, setBallotRounds]
  );

  const handleStartClick = useCallback(
    () =>
      setStep((state) => ({
        ...state,
        value: state.value + 1,
        direction: "next",
      })),
    []
  );
  const handlePrevClick = useCallback(
    () =>
      setStep((state) => ({
        ...state,
        value: state.value - 1,
        direction: "prev",
      })),
    []
  );
  const handleNextClick = useCallback(
    () =>
      setStep((state) => ({
        ...state,
        value: state.value + 1,
        direction: "next",
      })),
    []
  );
  const handleStartOverClick = useCallback(() => {
    const initalRound = getInitialRoundObj();
    appData = getAppConfig();
    setStep((state) => ({
      ...state,
      value: 1,
      direction: "startover",
    }));
    setBallotRounds([initalRound]);
  }, []);

  const stepLabelValue = step.value - 1;

  return (
    <>
      <h4>See how Ranked Choice Voting counts your ballots in action</h4>
      <p>Click the “Start” button to begin the interactive experience.</p>
      <div className="rcv">
        <div className="title">
          {/* <div className="rcv__title"> */}
          {step.value === 1
            ? `100 votes were casted`
            : `Round ${stepLabelValue}`}
        </div>
        <BarChart step={step} ballotRounds={ballotRounds} />
        <Instructions step={step} stepLabelValue={stepLabelValue} />
        <ButtonGroup
          step={step}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          handleStartOverClick={handleStartOverClick}
          handleStartClick={handleStartClick}
        />
      </div>
    </>
  );
}

export default App;
