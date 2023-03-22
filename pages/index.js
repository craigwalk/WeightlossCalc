import React from 'react';
import dynamic from 'next/dynamic'

const PlotlyChart = dynamic(import('../components/PlotlyChart'), {
  ssr: false
})


const IndexPage = () => {
  const data = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'red' },
    },
  ];

  const layout = {
    width: 600,
    height: 400,
    title: 'A Simple Plotly Chart',
  };

  return (
    <div>
      <h1>Plotly Chart Example</h1>
      <PlotlyChart data={data} layout={layout} />
    </div>
  );
};

export default IndexPage;
