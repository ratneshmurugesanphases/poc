import React, { memo } from "react";
import ReactEcharts from "echarts-for-react";

import { getChartConfig, formatRounds } from "../config/chart-config";

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
  return (
    <div className="barChart">
      <ReactEcharts
        lazyUpdate={true}
        notMerge={true}
        style={{ height: "410px", width: "98%" }}
        option={chartOptions}
      />
    </div>
  );
}

export default memo(BarChart);
