import React, { useState } from 'react';
import dynamic from 'next/dynamic'

//import the plotlychart component dynamically to avoid server-side-rendering
const PlotlyChart = dynamic(import('../components/PlotlyChart'), {
  ssr: false
});


const IndexPage = () => {
  // State to store the charts data
  const [data, setData] = useState([
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'red' },
    },
  ]);

  // State to store the input box's value 
  const [inputWeight, setInputWeight] = useState('')

  const updateChart = () => {
    // Parse the input value as a float
    const newWeight = parseFloat(inputWeight);

    // If the parsed value is a valid number, update the chart's data

    if (!isNaN(newWeight)) {
      setData((prevData) => [
        {
          ...prevData[0],
          x: [...prevData[0].x, newWeight],
        },
      ]);
    }
  }



//define the chart's layout properties
const layout = {
  width: 600,
  height: 400,
  title: 'A Simple Plotly Chart'
};

return (
  <div>
    <h1>Plotly Chart Example</h1>
    {/* Add an input Box and a button */}
    <div>
      <label htmlFor="weight-input">Weight: </label>
    {/* bind the input box value to the inputWeight state variable */}
    <input 
      id="weight-input"
      type="type"
      value={inputWeight}
      onChange={(e) => setInputWeight(e.target.value)}
      />
      {/* Call the updateChart function when the button is clicked */}
      <button onClick={updateChart}> Update Chart</button>
      </div>
      {/* Render the PlotlyChart component with data and layout props */}
      <PlotlyChart data={data} layout ={layout} />
    </div>
);
}

export default IndexPage;
