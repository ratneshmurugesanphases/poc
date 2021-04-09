import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

function App() {
  const barData = [
    {
      name: "Round 1",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      // emphasis: {
      //   focus: "series",
      // },
      data: [320, 302, 301, 334],
    },
    {
      name: "Round 2",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      // emphasis: {
      //   focus: "series",
      // },
      data: [120, 132, 101, 134],
      // markLine: {
      //   data: [{ type: "max", name: "Round 2" }],
      // },
    },
    {
      name: "Round 3",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      // emphasis: {
      //   focus: "series",
      // },
      data: [220, 182, 191, 234],
    },
    {
      name: "Round 4",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      // emphasis: {
      //   focus: "series",
      // },
      data: [150, 212, 201, 154],
    },
    {
      name: "Round 5",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      // emphasis: {
      //   focus: "series",
      // },
      data: [820, 832, 901, 934],
    },
  ];
  const initialOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {
      data: ["Round 1", "Round 2", "Round 3", "Round 4", "Round 5"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      data: barData.map(function (item) {
        console.log("x", item[0]);
        return item.data;
      })
    },
    yAxis: {
      type: "category",
      data: ["Candidate 1", "Candidate 2", "Candidate 3", "Candidate 4"],
    },
    color: [
      "#8e44ad",
      "#e74c3c",
      "#2ecc71",
      "#2c3e50",
      "#f39c12",
      // "#f95d6a",
    ],
    series: {
      markLine: {
        silent: true,
        lineStyle: {
          color: "#333",
        },
        data: [
          {
            xAxis: 600,
          },
        ],
      },
      type: "bar",
      data: barData.map(function (item, i) {
        console.log(item);
        // return {
        //   name: item.name,
        //   data: item.data,
        //   label: item.label,
        //   stack: item.stack,
        //   type: item.type,
        // };
        return item.data
      }),
      // data: [
      //   {
      //     name: "Round 1",
      //     type: "bar",
      //     stack: "total",
      //     label: {
      //       show: true,
      //     },
      //     // emphasis: {
      //     //   focus: "series",
      //     // },
      //     data: [320, 302, 301, 334],
      //   },
      //   {
      //     name: "Round 2",
      //     type: "bar",
      //     stack: "total",
      //     label: {
      //       show: true,
      //     },
      //     // emphasis: {
      //     //   focus: "series",
      //     // },
      //     data: [120, 132, 101, 134],
      //     // markLine: {
      //     //   data: [{ type: "max", name: "Round 2" }],
      //     // },
      //   },
      //   {
      //     name: "Round 3",
      //     type: "bar",
      //     stack: "total",
      //     label: {
      //       show: true,
      //     },
      //     // emphasis: {
      //     //   focus: "series",
      //     // },
      //     data: [220, 182, 191, 234],
      //   },
      //   {
      //     name: "Round 4",
      //     type: "bar",
      //     stack: "total",
      //     label: {
      //       show: true,
      //     },
      //     // emphasis: {
      //     //   focus: "series",
      //     // },
      //     data: [150, 212, 201, 154],
      //   },
      //   {
      //     name: "Round 5",
      //     type: "bar",
      //     stack: "total",
      //     label: {
      //       show: true,
      //     },
      //     // emphasis: {
      //     //   focus: "series",
      //     // },
      //     data: [820, 832, 901, 934],
      //   },
      // ],
    },
  };
  // const [options, setOptions] = useState(initialOption);

  // useEffect((_) => {
  //   setOptions(options);
  // }, []);

  console.log("App");

  return <ReactEcharts style={{ height: "600px" }} option={initialOption} />;
}

export default App;
