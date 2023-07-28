import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/machine-learning-plot.css';

const MachineLearningPlot = ({ performanceMetrics, title, performanceMetricsDescription}) => {
  const labels = Object.keys(performanceMetrics);
  const precision = labels.map((label) => performanceMetrics[label].precision);
  const recall = labels.map((label) => performanceMetrics[label].recall);
  const f1Score = labels.map((label) => performanceMetrics[label]['f1-score']);

  const data = [
    {
      type: 'bar',
      x: labels,
      y: precision,
      name: 'Precision',
    },
    {
      type: 'bar',
      x: labels,
      y: recall,
      name: 'Recall',
    },
    {
      type: 'bar',
      x: labels,
      y: f1Score,
      name: 'F1-Score',
    },
  ];

  const layout = {
    width: 600, height: 400,
    responsive: true,
    title: title,
    displayModeBar: false,
    barmode: 'group',
    xaxis: { title: 'Labels' },
    yaxis: { title: 'Score' },
  };

  return (
      <div className="machine_learning">
      <div className="machine_learning_info">
        <p className='machine_learning_title'>{title}</p>
        <p className='machine_learning_description'>{performanceMetricsDescription}</p>
      </div>
      <Plot data={data} layout={layout} />
      </div>
  );
};

export default MachineLearningPlot;
