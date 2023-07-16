import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/scatter-plot.css';
import '../styles/global.css'

const ScatterPlot = ({ title, description, x, y }) => {
return (
    <div className="scatter_plot">
        <div className="scatter_plot_info">
            <p className='scatter_plot_info_title'>{title}</p>
            <p className='scatter_plot_info_description'>{description}</p>
        </div>
        <Plot
            className='scatter_plot_graph'
            data={[
            {
                type: 'scatter',
                mode: 'markers',
                x: x,
                y: y,
            },
            ]}
            layout={{ width: 600, height: 400, title: title }}
        />
    </div>
);
};

export default ScatterPlot;
