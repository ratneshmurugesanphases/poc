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
      if (
        step.value >= 1 &&
        step.value < 8 &&
        (step.direction === "intial" ||
          step.direction === "prev" ||
          step.direction === "next")
      ) {
        console.log("UE", step);
        updatedAppData = [...appData].map((round) => {
          return {
            ...round,
            data: round.data.map((dataObj, index) => {
              // console.log({ [index]: dataObj });
              if (index === 4) {
                if (step.value === 3) {
                  dataObj.itemStyle = {
                    ...dataObj.itemStyle,
                    opacity: 0.1,
                  };
                }
                if (step.value === 2) {
                  dataObj.itemStyle = {
                    ...dataObj.itemStyle,
                    opacity: 1,
                  };
                }
              }

              if (index === 3) {
                if (step.value === 4) {
                  dataObj.itemStyle = {
                    ...dataObj.itemStyle,
                    opacity: 0.1,
                  };
                }
                if (step.value === 3) {
                  dataObj.itemStyle = {
                    ...dataObj.itemStyle,
                    opacity: 1,
                  };
                }
              }

              if (index === 6) {
                if (step.value === 5) {
                  dataObj.itemStyle = {
                    ...dataObj.itemStyle,
                    opacity: 0.1,
                  };
                }
                if (step.value === 4) {
                  dataObj.itemStyle = {
                    ...dataObj.itemStyle,
                    opacity: 1,
                  };
                }
              }

              if (index === 2) {
                if (step.value === 6) {
                  dataObj.itemStyle = {
                    ...dataObj.itemStyle,
                    opacity: 0.1,
                  };
                }
                if (step.value === 5) {
                  dataObj.itemStyle = {
                    ...dataObj.itemStyle,
                    opacity: 1,
                  };
                }
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
            setBallotRounds(updatedAppData.slice(0, step.value));
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

        setBallotRounds(updatedAppData.slice(0, step.value));
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
