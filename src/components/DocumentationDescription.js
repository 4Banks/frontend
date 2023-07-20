import React from 'react';

const DocumentationDescription = ({mainTitle, mainDescription, leftTitle, leftDescription, rightTitle, rightDescription}) => {
  return (
    <div className="documentation_description">
        <p className='documentation_description_main_title'>{mainTitle}</p>
        <div className="documentation_description_main">
        <p className='documentation_description_main_text'>{mainDescription}</p>
        </div>

        <div className="documentation_description_info">
          <div className="documentation_description_info_left">
            <p className='documentation_description_info_left_title'>{leftTitle}</p>
            <p>{leftDescription}</p>
          </div>
          <div className="documentation_description_info_right">
            <p className='documentation_description_info_right_title'>{rightTitle}</p>
            <p>{rightDescription}</p>
          </div>
        </div>
    </div>
  );
};

export default DocumentationDescription;
