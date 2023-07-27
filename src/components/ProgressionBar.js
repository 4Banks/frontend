import React, { useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import '../styles/progression-bar.css';
import '../styles/global.css';

const ProgressionBar = ({ requestCompleted ,title}) => {
  useEffect(() => {
    console.log('requestCompleted:', requestCompleted);
  }, [ requestCompleted]);

  return (
    <div className="progression">
      <div className="progression_container">
        <p className='progression_title'>{title}</p>
      <div className="progression_bar">
        <LinearProgress variant={requestCompleted ? "determinate" : "indeterminate"} value={100} />
      </div>
    </div>
    </div>
  );
};

export default ProgressionBar;
