import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/confusion-matrix-plot.css';

const ConfusionMatrixPlot = ({ performanceMetrics, confusionMatrix, title, confusionMatrixDescription}) => {

  const labels = Object.keys(performanceMetrics);
  const confusionMatrixData = confusionMatrix.map((row) => Object.values(row));

  const matrixData = [
    {
      type: 'heatmap',
      z: confusionMatrixData,
      x: labels,
      y: labels,
      colorscale: 'Viridis',
    },
  ];

  const matrixLayout = {
    width: 600, height: 400,
    responsive: true,
    displayModeBar: false,
    title: {title},
    xaxis: { title: 'Predicted Label' },
    yaxis: { title: 'True Label' },
  };

  return (
      <div className="confusion_matrix">
      <div className="confusion_matrix_info">
      <p className='confusion_matrix_title'>{title}</p>
      <p className='confusion_matrix_description'>{confusionMatrixDescription}</p>
      </div>
      <Plot data={matrixData} layout={matrixLayout} />
      </div>
  );
};

export default ConfusionMatrixPlot;
