import React, { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { Line, minMax, ResponsiveContainer, XAxis, XYPlot, YAxis } from '@semcore/d3-chart';

export default () => {
  const [[width, height], updateSize] = useState([0, 0]);
  const MARGIN = 40;
  const xScale = scaleLinear()
    .range([MARGIN, width - MARGIN])
    .domain(minMax(data, 'x'));
  const yScale = scaleLinear()
    .range([height - MARGIN, MARGIN])
    .domain([0, 10]);

  return (
    <ResponsiveContainer h={300} onResize={updateSize}>
      <XYPlot data={data} scale={[xScale, yScale]} width={width} height={height}>
        <YAxis ticks={yScale.ticks()}>
          <YAxis.Ticks />
          <YAxis.Grid />
        </YAxis>
        <XAxis ticks={xScale.ticks()}>
          <XAxis.Ticks />
        </XAxis>
        <Line x="x" y="y">
          <Line.Dots display />
        </Line>
      </XYPlot>
    </ResponsiveContainer>
  );
};

const data = Array(20)
  .fill({})
  .map((d, i) => ({
    x: i,
    y: Math.random().toFixed(1) * 10,
  }));
