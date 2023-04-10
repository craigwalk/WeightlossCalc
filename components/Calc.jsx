import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import _ from 'lodash';

const PlotlyChart = dynamic(import('./PlotlyChart'), {
  ssr: false,
});

const INITIAL_DATA = [
  {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: 'red' },
  },
];

const CHART_LAYOUT = {
  width: 600,
  height: 400,
  title: 'Percentage per week',
};

const Calc = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [inputWeight, setInputWeight] = useState('');

  const updateChart = (e) => {
    e.preventDefault();

    const newWeight = parseFloat(inputWeight);

    if (!isNaN(newWeight)) {
      const updatedData = _.cloneDeep(data);
      updatedData[0].x.push(newWeight);
      setData(updatedData);
    }
  };

  return (
    <div>
      <h1>Weightloss Percent per Week</h1>
      <form onSubmit={updateChart}>
        <label htmlFor="weight-input">Weight: </label>
        <input
          id="weight-input"
          type="number"
          value={inputWeight}
          onChange={(e) => setInputWeight(e.target.value)}
        />
        <button type="submit">Update Chart</button>
      </form>
      <PlotlyChart data={data} layout={CHART_LAYOUT} data-testid="plotly-chart"/>
    </div>
  );
};

export default Calc;
