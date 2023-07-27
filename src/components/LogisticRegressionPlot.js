import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/logistic-regression-plot.css';

const LogisticRegressionPlot = ({ performanceMetrics, confusionMatrix, performanceMetricsDescription, confusionMatrixDescription}) => {
  if (!performanceMetrics || !confusionMatrix) {
    return <div>Loading...</div>;
  }

  const labels = Object.keys(performanceMetrics);
  const precision = labels.map((label) => performanceMetrics[label].precision);
  const recall = labels.map((label) => performanceMetrics[label].recall);
  const f1Score = labels.map((label) => performanceMetrics[label]['f1-score']);

  const confusionMatrixData = confusionMatrix.map((row) => Object.values(row));

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
    title: 'Métricas da regressão logística',
    displayModeBar: false,
    barmode: 'group',
    xaxis: { title: 'Labels' },
    yaxis: { title: 'Score' },
  };

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
    title: 'Matriz de confusão',
    xaxis: { title: 'Predicted Label' },
    yaxis: { title: 'True Label' },
  };

  return (
    <div className='logistic_regression_plot'>
      <div className="logistic_regression">
      <div className="logistic_regression_info">
        <p className='logistic_regression_title'>Métricas da regressão logística</p>
        <p className='logistic_regression_description'>{performanceMetricsDescription}</p>
      </div>
      <Plot data={data} layout={layout} />
      </div>
      <div className="logistic_regression">
      <div className="logistic_regression_info">
      <p className='logistic_regression_title'>Matriz de confusão</p>
      <p className='logistic_regression_description'>{confusionMatrixDescription}</p>
      </div>


      <Plot data={matrixData} layout={matrixLayout} />
      </div>
    </div>
  );
};

export default LogisticRegressionPlot;
