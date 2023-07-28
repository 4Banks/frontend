import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/confusion-matrix-plot.css';


const ConfusionMatrixPlot = ({ confusionMatrix, title, confusionMatrixDescription}) => {

  const labels = ['1', '0'];
  const zValues = confusionMatrix;

  const matrixData = [
    {
      type: 'heatmap',
      z: zValues,
      x: labels,
      y: labels,
      colorscale: 'Viridis',
    },
  ];

  const matrixLayout = {
    width: 600,
    height: 400,
    responsive: true,
    displayModeBar: false,
    title: title || 'Confusion Matrix',
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

