import React, { useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import '../styles/superficial-analysis-progression.css';
import '../styles/global.css';

const SuperficialAnalysisProgression = ({ requestCompleted }) => {
  useEffect(() => {
    console.log('requestCompleted:', requestCompleted);
  }, [ requestCompleted]);

  return (
    <div className="superficial_analysis_progression">
      <div className="superficial_analysis_progression_container">
        <p className='superficial_analysis_progression_title'>Análises superficiais</p>
      <div className="superficial_analysis_progression_bar">
        <LinearProgress variant={requestCompleted ? "determinate" : "indeterminate"} value={100} />
      </div>
    </div>
    </div>
  );
};

export default SuperficialAnalysisProgression;
