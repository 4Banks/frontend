import React, { useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import '../styles/progression-bar.css';
import '../styles/global.css';

const ProgressionBar = ({ requestStatus, title }) => {
  useEffect(() => {
    console.log('requestStatus:', requestStatus);
  }, [requestStatus]);

  const getStatusText = () => {
    if (requestStatus === 'failed') {
      return 'Falhou';
    }
    return null;
  };

  return (
    <div className="progression">
      <div className="progression_container">
        <p className='progression_title'>{title}</p>
        {requestStatus !== 'failed' && (
          <div className="progression_bar">
            <LinearProgress variant={requestStatus ? "determinate" : "indeterminate"} value={100} />
          </div>
        )}
        {getStatusText() && <p className="status_text">{getStatusText()}</p>}
      </div>
    </div>
  );
};

export default ProgressionBar;
