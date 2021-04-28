// import { getAppConfig } from "../config/app-config";

const type = "bar";
const stack = true;
const colorTransparent = "rgba(255, 255, 255, 0)";
const splitLineColor = "rgba(34, 20, 74, 0.15)";
const fiftyPercentLineColor = "#333";
const axisLabelColor = "#000";
const fontFamily = "Whyte";

export const isSmallScreen = window.innerWidth < 426;
export const isMediumScreen =
  window.innerWidth >= 426 && window.innerWidth < 769;
export const isLargeScreen = window.innerWidth >= 769;
const barWidth = isSmallScreen ? 24 : 40;

export const barLabelProps = {
  label: {
    fontSize: isSmallScreen || isMediumScreen ? 13 : 18,
  },
};
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
  customColors[1],
  customColors[1],
  customColors[4],
  customColors[3],
  customColors[6],
  customColors[2],
];
export const stepFiveOrangeColors = [
  customColors[5],
  customColors[5],
  customColors[4],
  customColors[3],
  customColors[6],
  customColors[2],
];
export const fiftyPercentLine = {
  silent: true,
  lineStyle: {
    color: fiftyPercentLineColor,
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
  },
};
export const emptyDataObj = {
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
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "    ",
  ],
  md: ["", "  ", "   ", "  ", "  ", "  ", "  ", ""],
};
const iconTextSpaces = {
  sm: ["", " ", "     ", "  ", " ", "", "     ", ""],
  md: ["", "  ", "     ", "   ", "  ", " ", "      ", " "],
};
function getIconStyles(hasVotingEnded) {
  let iconStyleProps = {};
  let iconFadeStyleProps = {};
  const textFade = {
    opacity: hasVotingEnded ? 0.05 : 0.2,
    fontWeight: 700,
    fontSize: isSmallScreen || isMediumScreen ? 14 : 21,
    fontFamily,
  };

  iconPaths.forEach((iconPath, i) => {
    const burstIconHeightLarge = 50;
    const burstIconHeightSmall = 42;
    const iconHeightLarge = 22;
    const iconHeightSmall = 17;
    let iconHeight;
    let iconBurstHeight;

    if (isSmallScreen || isMediumScreen) {
      iconHeight = iconHeightSmall;
      iconBurstHeight = burstIconHeightSmall;
    } else {
      iconHeight = iconHeightLarge;
      iconBurstHeight = burstIconHeightLarge;
    }

    const updatedIconStyleProps = {
      backgroundColor: {
        image: iconPath,
      },
      height: i === 7 ? iconBurstHeight : iconHeight,
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
  let labelDistance = 15;
  let isLabelShown = false;
  let labelLayout = {
    hideOverlap: true,
    x: 70,
    dy: -5,
  };
  const brLen = ballotRounds.length - 1;
  return ballotRounds.map((round, roundIndex) => {
    const getSum = (series) => {
      return (param) => {
        let sum = 0;
        series.forEach((seriesDatum) => {
          sum += seriesDatum.data[param.dataIndex].value;
        });
        return param.dataIndex === 0 ? "" : `${sum} votes`;
      };
    };
    if (isSmallScreen) {
      labelPosition = "bottom";
    }
    if (isMediumScreen || isLargeScreen) {
      labelLayout = {
        hideOverlap: true,
      };
    }
    if (stepValue === 2 || roundIndex === brLen) {
      isLabelShown = true;
    }

    return Object.assign(round, {
      label: {
        fontFamily,
        show: isLabelShown,
        formatter: stepValue === 1 ? "" : getSum(ballotRounds),
        position: labelPosition,
        distance: labelDistance,
      },
      labelLayout: labelLayout,
    });
  });
}

export function getChartConfig({ stepValue, hasVotingEnded }) {
  const chartConfig = {
    title: {
      show: hasVotingEnded ? true : false,
      text: ` Purple wins!\n 52% to 48%`,
      left: isSmallScreen ? "25%" : "35%",
      top: isSmallScreen || isMediumScreen ? "38%" : "40%",
      textStyle: {
        fontFamily,
        lineHeight: 40,
        color: customColors[1],
        fontWeight: 900,
        fontSize: isSmallScreen || isMediumScreen ? 28 : 36,
      },
    },
    grid: {
      left: isSmallScreen ? -35 : 15,
      right: "5%",
      bottom: "5%",
      top: "-14%",
      height: isSmallScreen ? 505 : 645,
      width: isSmallScreen ? "106%" : "100%",
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
        fontFamily,
        fontSize: isSmallScreen || isMediumScreen ? 14 : 18,
        padding: isSmallScreen || isMediumScreen ? [10, 0, 0, 10] : [15, 0, 0, 10],
        formatter: (value, index) => {
          if (isSmallScreen && index === 3) {
            return "";
          }
          if (isMediumScreen && index === 6) {
            return "";
          }
          return `${value}%`;
        },
      },
      interval: isSmallScreen ? 25 : 10,
      min: 0,
      max: isSmallScreen ? 60 : 67,
    },
    yAxis: {
      type: "category",
      offset: 5,
      splitLine: {
        show: true,
        lineStyle: {
          width: 2,
          color: splitLineColor,
        },
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
        color: axisLabelColor,
        fontSize: isSmallScreen || isMediumScreen ? 14 : 21,
        fontWeight: "bolder",
        fontFamily,
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
          ...getIconStyles(hasVotingEnded),
        },
      },
    },
  };

  return chartConfig;
}
