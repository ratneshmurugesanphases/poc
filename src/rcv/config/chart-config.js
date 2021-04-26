// import { getAppConfig } from "../config/app-config";

const type = "bar";
const stack = true;
const colorTransparent = "rgba(255, 255, 255, 0)";
export const isSmallScreen = window.innerWidth < 426;
export const isMediumScreen =
  window.innerWidth >= 426 && window.innerWidth < 769;
const barWidth = isSmallScreen ? 25 : 30;

export const customColors = [
  "rgba(255, 255, 255, 0)",
  "#221649", // Purple
  "#4BA3B7", // Blue
  "#367D54", // Green
  "#FADE4B", // Yellow
  "#EB5534", // Orange
  "#ED7ACA", // Pink
];
export const stepFivePurpleColors = [
  "#221649",
  "#221649",
  "#FADE4B",
  "#367D54",
  "#ED7ACA",
  "#4BA3B7",
];
export const stepFiveOrangeColors = [
  "#EB5534",
  "#EB5534",
  "#FADE4B",
  "#367D54",
  "#ED7ACA",
  "#4BA3B7",
];
export const fiftyPercentLine = {
  silent: true,
  lineStyle: {
    color: "#333",
    type: "dashed",
    width: 2,
    opacity: 0.15,
  },
  label: {
    show: false,
  },
  symbolSize: 0,
  data: [
    {
      symbolOffset: [5, 5],
      y: 10,
      xAxis: 50,
    },
  ],
  animation: false,
};
export const genericProps = {
  type,
  barWidth,
  stack,
  silent: true,
  animation: true,
  animationEasing: "circularOut",
  animationEasingUpdate: "circularOut",
  animationDuration: 750,
  animationDelay: function (idx) {
    return idx * 75;
  },
  animationDelayUpdate: function (idx) {
    return idx * 50;
  }
};
export const emptyDataObj = {
  id: "empty",
  value: null,
  itemStyle: {
    color: colorTransparent,
  },
};

const iconPaths = [
  "",
  "/rcv/icon-person-purple.svg",
  "/rcv/icon-person-blue.svg",
  "/rcv/icon-person-green.svg",
  "/rcv/icon-person-yellow.svg",
  "/rcv/icon-person-orange.svg",
  "/rcv/icon-person-pink.svg",
  "/rcv/icon-person-purple-burst.svg",
];
const iconStyleNames = [
  "",
  "purple",
  "blue",
  "green",
  "yellow",
  "orange",
  "pink",
  "purpleBurst",
];
const iconFadeStyleNames = [
  "",
  "purpleFade",
  "blueFade",
  "greenFade",
  "yellowFade",
  "orangeFade",
  "pinkFade",
  "purpleBurstFade",
];
const iconSpaces = {
  sm: [
    "",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "   ",
  ],
  md: ["", "  ", "   ", "  ", "  ", "  ", "  ", ""],
};
const iconTextSpaces = {
  sm: ["", " ", "    ", "  ", " ", "", "    ", ""],
  md: ["", " ", "    ", "  ", " ", "", "     ", ""],
};
function getIconStyles() {
  let iconStyleProps = {};
  let iconFadeStyleProps = {};
  const textFade = {
    opacity: 0.2,
  };

  iconPaths.forEach((iconPath, i) => {
    const updatedIconStyleProps = {
      backgroundColor: {
        image: iconPath,
      },
      height: i === 7 ? 40 : 17,
      align: "right",
    };
    iconStyleProps = {
      ...iconStyleProps,
      ...{
        [iconStyleNames[i]]: {
          ...updatedIconStyleProps,
        },
      },
    };
    iconFadeStyleProps = {
      ...iconFadeStyleProps,
      ...{
        [iconFadeStyleNames[i]]: {
          ...updatedIconStyleProps,
          ...textFade,
        },
      },
    };
  });
  return { ...iconStyleProps, ...iconFadeStyleProps, textFade };
}

export function formatRounds(ballotRounds, stepValue) {
  let labelPosition = "right";
  let labelDistance = 7;
  let isLabelShown = false;
  const brLen = ballotRounds.length - 1;
  return ballotRounds.map((round, roundIndex) => {
    const getSum = (series) => {
      return (param) => {
        let sum = 0;
        series.forEach((seriesDatum) => {
          sum += seriesDatum.data[param.dataIndex].value;
        });
        return `${sum} votes`;
      };
    };
    if (isSmallScreen) {
      labelPosition = "bottom";
    }
    if (stepValue === 2 || roundIndex === brLen) {
      isLabelShown = true;
    }

    return Object.assign(round, {
      label: {
        // show: round.name === 'r1' ? true  : false,
        // show: true,
        show: isLabelShown,
        formatter: getSum(ballotRounds),
        position: labelPosition,
        distance: labelDistance,
      },

      labelLayout: {
        hideOverlap: true,
      },
    });
  });
}

export function getChartConfig({ stepValue, hasVotingEnded }) {
  // console.log("GCC", {
  //   stepValue,
  //   hasVotingEnded,
  //   iconStyles: getIconStyles(),
  // });
  const chartConfig = {
    title: {
      show: hasVotingEnded ? true : false,
      text: ` Purple wins!\n 52% to 48%`,
      left: isSmallScreen ? "25%" : "35%",
      top: "40%",
      textStyle: {
        lineHeight: 30,
        color: customColors[1],
        fontWeight: 900,
        fontSize: 24,
      },
    },
    grid: {
      left: isSmallScreen ? -20 : 20,
      right: "5%",
      bottom: "5%",
      top: "-14%",
      height: 470,
      width: isSmallScreen ? "100%" : "90%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        padding: [0, 0, 0, 10],
        formatter: (value) => {
          return `${value}%`;
        },
      },
      interval: isSmallScreen ? 25 : 10,
      min: 0,
      max: 60,
    },
    yAxis: {
      type: "category",
      offset: 5,
      splitLine: {
        show: true,
      },
      inverse: true,
      data: ["null", "Purple", "Blue", "Green", "Yellow", "Orange", "Pink"],
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#000",
        fontWeight: "bolder",
        formatter: (axisLabel, axisIndex) => {
          if (isSmallScreen) {
            if (axisIndex === 2) {
              if (stepValue >= 6) {
                return [
                  `{${iconFadeStyleNames[axisIndex]}|}${iconSpaces.sm[axisIndex]}

        {textFade|${axisLabel}}${iconTextSpaces.sm[axisIndex]}`,
                ];
              }
            }
            if (axisIndex === 3) {
              if (stepValue >= 4) {
                return [
                  `{${iconFadeStyleNames[axisIndex]}|}${iconSpaces.sm[axisIndex]}

        {textFade|${axisLabel}}${iconTextSpaces.sm[axisIndex]}`,
                ];
              }
            }
            if (axisIndex === 4) {
              if (stepValue >= 3) {
                return [
                  `{${iconFadeStyleNames[axisIndex]}|}${iconSpaces.sm[axisIndex]}

        {textFade|${axisLabel}}${iconTextSpaces.sm[axisIndex]}`,
                ];
              }
            }
            if (axisIndex === 6) {
              if (stepValue >= 5) {
                return [
                  `{${iconFadeStyleNames[axisIndex]}|}${iconSpaces.sm[axisIndex]}

        {textFade|${axisLabel}}${iconTextSpaces.sm[axisIndex]}`,
                ];
              }
            }
            if (hasVotingEnded && axisIndex === 1) {
              return [
                `{${iconStyleNames[7]}|}${iconSpaces.sm[7]}
              ${axisLabel}${iconTextSpaces.sm[7]}`,
              ];
            }

            return [
              `{${iconStyleNames[axisIndex]}|}${iconSpaces.sm[axisIndex]}

            ${axisLabel}${iconTextSpaces.sm[axisIndex]}`,
            ];
          } else {
            if (axisIndex === 2) {
              if (stepValue >= 6) {
                return [
                  `{${iconFadeStyleNames[axisIndex]}|}${iconSpaces.md[axisIndex]}{textFade|${axisLabel}}${iconTextSpaces.md[axisIndex]}`,
                ];
              }
            }
            if (axisIndex === 3) {
              if (stepValue >= 4) {
                return [
                  `{${iconFadeStyleNames[axisIndex]}|}${iconSpaces.md[axisIndex]}{textFade|${axisLabel}}${iconTextSpaces.md[axisIndex]}`,
                ];
              }
            }
            if (axisIndex === 4) {
              if (stepValue >= 3) {
                return [
                  `{${iconFadeStyleNames[axisIndex]}|}${iconSpaces.md[axisIndex]}{textFade|${axisLabel}}${iconTextSpaces.md[axisIndex]}`,
                ];
              }
            }
            if (axisIndex === 6) {
              if (stepValue >= 5) {
                return [
                  `{${iconFadeStyleNames[axisIndex]}|}${iconSpaces.md[axisIndex]}{textFade|${axisLabel}}${iconTextSpaces.md[axisIndex]}`,
                ];
              }
            }
            if (hasVotingEnded && axisIndex === 1) {
              return [
                `{${iconStyleNames[7]}|}${iconSpaces.md[7]}${axisLabel}${iconTextSpaces.md[7]}`,
              ];
            }

            return [
              `{${iconStyleNames[axisIndex]}|}${iconSpaces.md[axisIndex]}${axisLabel}${iconTextSpaces.md[axisIndex]}`,
            ];
          }
        },
        verticalAlign: "middle",
        rich: {
          ...getIconStyles(),
        },
      },
    },
  };

  return chartConfig;
}
