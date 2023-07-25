import React, { useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import '../styles/sampling-progression.css';
import '../styles/global.css';

const SamplingProgression = ({ requestCompleted }) => {
  useEffect(() => {
    console.log('requestCompleted:', requestCompleted);
  }, [ requestCompleted]);

  return (
    <div className="sampling_progression">
      <div className="sampling_progression_container">
        <p className='sampling_progression_title'>Amostragem dos dados</p>
      <div className="sampling_progression_bar">
        <LinearProgress variant={requestCompleted ? "determinate" : "indeterminate"} value={100} />
      </div>
    </div>
    </div>
  );
};

export default SamplingProgression;
