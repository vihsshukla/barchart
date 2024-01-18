import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = ({ data, checkedRows }) => {
  const selectedData = checkedRows.map((rowIndex) => data[rowIndex]);

  const fields = ['numericValue1', 'numericValue2', 'numericValue3'];

  const traces = fields.map((field, index) => ({
    type: 'bar',
    mode: 'markers',
    x: selectedData.map((row) => row.name),
    y: selectedData.map((row) => row[field]),
    name: `Numeric Value${index+1}`,
  }));

  return (
    <Plot
      data={traces}
      layout={{
        width: 1200,
        height: 400,
        title: 'Bar Chart',
        yaxis: { title: 'Value' },
        showlegend: true,
      }}
      config={{ responsive: true }}
    />
  );
};

export default BarChart;
