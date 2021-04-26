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
        id: "r0-d0",
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
        id: "r0-d1",
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
        id: "r0-d2",
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
        id: "r0-d3",
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
        id: "r0-d4",
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
        id: "r0-d5",
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
        id: "r0-d6",
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
          id: "r1-d1",
          value: 24, //25
          itemStyle: {
            color: customColors[1],
          },
          label: {
          },
        },
        {
          id: "r1-d2",
          value: 14, //15
          itemStyle: {
            color: customColors[2],
          },
          label: {
          },
        },
        {
          id: "r1-d3",
          value: 9, //10
          itemStyle: {
            color: customColors[3],
          },
          label: {
          },
        },
        {
          id: "r1-d4",
          value: 4, //5
          itemStyle: {
            color: customColors[4],
          },
          label: {
          },
        },
        {
          id: "r1-d5",
          value: 29, //30
          itemStyle: {
            color: customColors[5],
          },
          label: {
          },
        },
        {
          id: "r1-d6",
          value: 14, //15
          itemStyle: {
            color: customColors[6],
          },
          label: {
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
          id: "r2-d1",
          value: 2,
          itemStyle: {
            color: customColors[4],
          },
        },
        {
          id: "r2-d2",
          value: 1,
          itemStyle: {
            color: customColors[4],
          },
          label: {
          },
        },
        {
          value: 0,
          label: {
          },
        },
        {
          value: 0,
        },
        {
          id: "r2-d5",
          value: 2,
          itemStyle: {
            color: customColors[4],
          },
        },
        {
          value: 0,
        },
      ],
    },
    {
      name: "r3",
      ...genericProps,
      data: [
        emptyDataObj,
        {
          id: "r3-d1",
          value: 5,
          itemStyle: {
            color: customColors[3],
          },
        },
        {
          id: "r3-d2",
          value: 1,
          itemStyle: {
            color: customColors[3],
          },
          label: {
          },
        },
        {
          value: 0,
        },
        {
          value: 0,
        },
        {
          id: "r3-d5",
          value: 3,
          itemStyle: {
            color: customColors[3],
          },
        },
        {
          id: "r3-d6",
          value: 1,
          itemStyle: {
            color: customColors[3],
          },
          label: {
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
          id: "r4-d1",
          value: 14,
          itemStyle: {
            color: customColors[6],
          },
        },
        {
          value: 0,
        },
        {
          value: 0,
        },
        {
          value: 0,
        },
        {
          id: "r4-d5",
          value: 2,
          itemStyle: {
            color: customColors[6],
          },
        },
        {
          value: 0,
        },
      ],
    },
    {
      name: "r5",
      ...genericProps,
      data: [
        emptyDataObj,
        {
          id: "r5-d1",
          value: 6,
          itemStyle: {
            color: customColors[2],
          },
        },
        {
          value: 0,
          label: {
          },
        },
        {
          value: 0,
        },
        {
          value: 0,
        },
        {
          id: "r5-d1",
          value: 11,
          itemStyle: {
            color: customColors[2],
          },
        },
        {
          value: 0,
        },
      ],
    },
  ];
  return appData;
}
