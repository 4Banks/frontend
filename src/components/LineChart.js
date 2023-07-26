import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/line-chart.css';

const LineChart = ({ title, description, traces, xTitle, yTitle }) => {
  const renderDescription = () => {
    if (!description) {
      return null;
    }

    const descriptionParts = description.split('\n');

    return descriptionParts.map((part, index) => (
      <p key={index} className='line_chart_info_description'>
        {part}
      </p>
    ));
  };

  return (
    <div className="line_chart">
      <div className="line_chart_info">
        <p className='line_chart_info_title'>{title}</p>
        {renderDescription()}
      </div>
      <Plot
        className='line_chart_graph'
        data={traces}
        layout={{ width: 600, height: 400, title: title, xaxis: { title: xTitle }, yaxis: { title: yTitle }, }}
      />
    </div>
  );
};

export default LineChart;
