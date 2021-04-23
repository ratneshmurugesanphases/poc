import {
  genericProps,
  customColors,
  fiftyPercentLine,
  emptyDataObj,
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
        },
        {
          value: 14, //15
          itemStyle: {
            color: customColors[2],
          },
        },
        {
          value: 9, //10
          itemStyle: {
            color: customColors[3],
          },
        },
        {
          value: 4, //5
          itemStyle: {
            color: customColors[4],
          },
        },
        {
          value: 29, //30
          itemStyle: {
            color: customColors[5],
          },
        },
        {
          value: 14, //15
          itemStyle: {
            color: customColors[6],
          },
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
        },
        {
          value: 1,
          itemStyle: {
            color: customColors[4],
          },
        },
        {
          value: null,
        },
        {
          value: null,
        },
        {
          value: 2,
          itemStyle: {
            color: customColors[4],
          },
        },
        {
          value: null,
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
        },
        {
          value: 1,
          itemStyle: {
            color: customColors[3],
          },
        },
        {
          value: null,
        },
        {
          value: null,
        },
        {
          value: 3,
          itemStyle: {
            color: customColors[3],
          },
        },
        {
          value: 1,
          itemStyle: {
            color: customColors[3],
          },
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
        },
        {
          value: null,
        },
        {
          value: null,
        },
        {
          value: null,
        },
        {
          value: 2,
          itemStyle: {
            color: customColors[6],
          },
        },
        {
          value: null,
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
        },
        {
          value: null,
        },
        {
          value: null,
        },
        {
          value: null,
        },
        {
          value: 11,
          itemStyle: {
            color: customColors[2],
          },
        },
        {
          value: null,
        },
      ],
    },
  ];
  return appData;
}
