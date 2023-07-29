import React from 'react';
import '../styles/documentation-description.css';

const DocumentationDescription = ({
  mainTitle,
  mainDescription,
  leftTitle,
  leftDescription,
  rightTitle,
  rightDescription,
  srcImage,
}) => {
  return (
    <div className="documentation_description">
      <p className="documentation_description_main_title">{mainTitle}</p>
      {mainDescription  &&(
      <div className="documentation_description_main">
        <p className="documentation_description_main_text">{mainDescription}</p>
      </div>
      )}

      {(leftDescription || rightDescription) && (
        <div className="documentation_description_info">
          {leftDescription && (
            <div className="documentation_description_info_left">
              <p className="documentation_description_info_left_title">{leftTitle}</p>
              <p>
                {leftDescription.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          )}
          {rightDescription && (
            <div className="documentation_description_info_right">
              <p className="documentation_description_info_right_title">{rightTitle}</p>
              <p>
                {rightDescription.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          )}
        </div>
      )}
    {srcImage && (
      <div className="documentation_description_container_image">
      <img src={srcImage} alt="documentation" className="documentation_description_image" />
      </div>
    )}
    </div>
  );
};

export default DocumentationDescription;
