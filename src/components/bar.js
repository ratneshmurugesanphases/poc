import React, { useState, useCallback, useEffect } from "react";

import ButtonGroup from "../components/button-group";
import { Animate } from "react-move";
import { easeExpOut  } from 'd3-ease';
import { getInitialRoundObj } from "./utils";

import "./styles.scss";

const Bar = () => {
  const [step, setStep] = useState({ value: 1, direction: "initial" });
  const initialRound = getInitialRoundObj();
  const chartData = initialRound.data;

  useEffect(
    (_) => {
      // let ballotWinnerTimer;
      // let updatedAppData;
      if (
        step.value >= 1 &&
        step.value < 8 &&
        (step.direction === "intial" ||
          step.direction === "prev" ||
          step.direction === "next")
      ) {
        console.log("UE", step);

        // setBallotRounds(updatedAppData.slice(0, step.value));
      }

      return () => {
        // clearTimeout(ballotWinnerTimer);
      };
    },
    [step]
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
    // const initalRound = getInitialRoundObj();
    // appData = getAppConfig();
    setStep((state) => ({
      ...state,
      value: 1,
      direction: "startover",
    }));
    // setBallotRounds([initalRound]);
  }, []);

  console.log(step);
  // const stepValue = step.value;
  const stepDir = step.direction;

  return (
    <div className="barChart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="equilizer"
        // preserveAspectRatio="xMidYMid meet"
        // preserveAspectRatio="none"
        // preserveAspectRatio="xMinYMid slice"
        viewBox="0 0 500 300"
      >
        {chartData.length &&
          chartData.map((datum) => {
            return (
              <Animate
              start={() => ({
                width: 5,
              })}
                update={() => ({
                    width: [stepDir === "next" ? 200 : 0],
                    timing: { duration: 750, ease: easeExpOut },
                  })}
              >
                {(state) => {
                  return (
                    <rect
                      key={datum.key}
                      className={datum.class}
                      x={datum.x}
                      y={datum.y}
                      width={state.width}
                      height={datum.h}
                    ></rect>
                  );
                }}
              </Animate>
            );
            // return (
            //   <rect
            //     key={datum.key}
            //     className={datum.class}
            //     x={datum.x}
            //     y={datum.y}
            //     width={datum.w}
            //     height={datum.h}
            //   ></rect>
            // );
          })}
        {/* <text x="0" y="15" fill="red">00 votes</text> */}
      </svg>
      <ButtonGroup
        step={step}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        handleStartOverClick={handleStartOverClick}
        handleStartClick={handleStartClick}
      />
    </div>
  );
};

export default Bar;
