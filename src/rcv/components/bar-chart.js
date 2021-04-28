import React, { memo } from "react";
import ReactEcharts from "echarts-for-react";

import {
  getChartConfig,
  formatRounds,
  isSmallScreen,
} from "../config/chart-config";

function BarChart({ ballotRounds, step }) {
  const stepValue = step.value;
  const updatedBallotRounds = formatRounds(ballotRounds, stepValue);
  const hasVotingEnded = !!updatedBallotRounds[0].hasVotingEnded;
  const chartConfig = getChartConfig({ stepValue, hasVotingEnded });
  const chartOptions = {
    ...chartConfig,
    series: updatedBallotRounds,
  };
  // console.log("BarChart br", updatedBallotRounds);
  const styleProps = isSmallScreen
    ? {
        height: "443px",
        width: "97%",
      }
    : { height: "576px", width: "97%" };
  return (
    <div className="barChart">
      <ReactEcharts
        lazyUpdate={true}
        notMerge={true}
        style={styleProps}
        option={chartOptions}
      />
    </div>
  );
}

export default memo(BarChart);
