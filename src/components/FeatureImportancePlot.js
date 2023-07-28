import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/feature-importance-plot.css';

const FeatureImportancePlot = ({ featureImportance,title,featureImportanceDescription}) => {
  if (!featureImportance || Object.keys(featureImportance).length === 0) {
    return <div>No featureImportance available to display.</div>;
  }

  const keys = Object.keys(featureImportance);
  const values = Object.values(featureImportance);

  const trace = {
    x: values.reverse(), 
    y: keys.reverse(), 
    type: 'bar',
    orientation: 'h',
    marker: {
      color: 'blue', 
    },
  };

  const layout = {
    title: title,
    xaxis: { title: 'Importância' },
    yaxis: { title: 'Features' }, 
    displayModeBar: false,
    margin: { l: 150 }, 
    responsive: true,
  };

  return (
    <div className="feature_importance">
    <div className="feature_importance_info">
      <p className='feature_importance_title'>{title}</p>
      <p className='feature_importance_description'>{featureImportanceDescription}</p>
    </div>
    <Plot data={[trace]} layout={layout} />
    </div>
);
};

export default FeatureImportancePlot;
