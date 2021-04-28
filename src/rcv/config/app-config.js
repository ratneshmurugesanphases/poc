import {
  genericProps,
  customColors,
  fiftyPercentLine,
  emptyDataObj,
  barLabelProps,
} from "../config/chart-config";

export function getInitialRoundObj() {
  const initialRound = {
    name: "r0",
    ...genericProps,
    markLine: fiftyPercentLine,
    data: [
      {
        value: 65,
        itemStyle: {
          color: customColors[0],
          opacity: 1,
        },
        label: {
          show: false,
        },
      },
      {
        value: 1,
        itemStyle: {
          color: customColors[1],
          opacity: 1,
        },
        label: {
          show: false,
        },
      },
      {
        value: 1,
        itemStyle: {
          color: customColors[2],
          opacity: 1,
        },
        label: {
          show: false,
        },
      },
      {
        value: 1,
        itemStyle: {
          color: customColors[3],
          opacity: 1,
        },
        label: {
          show: false,
        },
      },
      {
        value: 1,
        itemStyle: {
          color: customColors[4],
          opacity: 1,
        },
        label: {
          show: false,
        },
      },
      {
        value: 1,
        itemStyle: {
          color: customColors[5],
          opacity: 1,
        },
        label: {
          show: false,
        },
      },
      {
        value: 1,
        itemStyle: {
          color: customColors[6],
          opacity: 1,
        },
        label: {
          show: false,
        },
      },
    ],
  };
  return initialRound;
}

export function getAppConfig() {
  const round0 = getInitialRoundObj();
  const appData = [
    round0,
    {
      name: "r1",
      ...genericProps,
      animationDelay: null,
      animationDelayUpdate: null,
      data: [
        emptyDataObj,
        {
          value: 24, //25
          itemStyle: {
            color: customColors[1],
          },
          ...barLabelProps,
        },
        {
          value: 14, //15
          itemStyle: {
            color: customColors[2],
          },
          ...barLabelProps,
        },
        {
          value: 9, //10
          itemStyle: {
            color: customColors[3],
          },
          ...barLabelProps,
        },
        {
          value: 4, //5
          itemStyle: {
            color: customColors[4],
          },
          ...barLabelProps,
        },
        {
          value: 29, //30
          itemStyle: {
            color: customColors[5],
          },
          ...barLabelProps,
        },
        {
          value: 14, //15
          itemStyle: {
            color: customColors[6],
          },
          ...barLabelProps,
        },
      ],
    },
    {
      name: "r2",
      ...genericProps,
      data: [
        emptyDataObj,
        {
          value: 2,
          itemStyle: {
            color: customColors[4],
          },
          ...barLabelProps,
        },
        {
          value: 1,
          itemStyle: {
            color: customColors[4],
          },
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
        {
          value: 2,
          itemStyle: {
            color: customColors[4],
          },
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
      ],
    },
    {
      name: "r3",
      ...genericProps,
      data: [
        emptyDataObj,
        {
          value: 5,
          itemStyle: {
            color: customColors[3],
          },
          ...barLabelProps,
        },
        {
          value: 1,
          itemStyle: {
            color: customColors[3],
          },
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
        {
          value: 3,
          itemStyle: {
            color: customColors[3],
          },
          ...barLabelProps,
        },
        {
          value: 1,
          itemStyle: {
            color: customColors[3],
          },
          ...barLabelProps,
        },
      ],
    },
    {
      name: "r4",
      ...genericProps,
      data: [
        emptyDataObj,
        {
          value: 14,
          itemStyle: {
            color: customColors[6],
          },
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
        {
          value: 2,
          itemStyle: {
            color: customColors[6],
          },
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
      ],
    },
    {
      name: "r5",
      ...genericProps,
      data: [
        emptyDataObj,
        {
          value: 6,
          itemStyle: {
            color: customColors[2],
          },
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
        {
          value: 11,
          itemStyle: {
            color: customColors[2],
          },
          ...barLabelProps,
        },
        {
          value: null,
          ...barLabelProps,
        },
      ],
    },
  ];
  return appData;
}
