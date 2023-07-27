import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/bar-chart.css';
import '../styles/global.css'

const BarChart = ({ title, description, x, y }) => {
return (
    <div className="bar_chart">
        <div className="bar_chart_info">
            <p className='bar_chart_info_title'>{title}</p>
            <p className='bar_chart_info_description'>{description}</p>
    </div>
    <Plot
        className='bar_chart_graph'
        data={[
        {
            type: 'bar',
            x: x,
            y: y,
        },
        ]}
        layout={{ width: 600, height: 400, title: title, responsive: true, scrollZoom: true}}
    />
    </div>
);
};

export default BarChart;
