import React from 'react';
import Plot from 'react-plotly.js';
import dynamic from 'next/dynamic';

const PlotlyChart = ({ data, layout }) => {
  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default PlotlyChart;
