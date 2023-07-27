import React, {useState} from 'react';
import '../styles/decision-tree-plot.css';

const DecisionTreePlot = ({ title, description, dataDecisionTree, fileName}) => {

  const [isHovered, setIsHovered] = useState(false);

  const renderDescription = () => {
    if (!description) {
      return null;
    }

    const descriptionParts = description.split('\n');

    return descriptionParts.map((part, index) => (
      <p key={index} className='decision_tree_info_description'>
        {part}
      </p>
    ));
  };

  return (
    <div className="decision_tree">
      <div className="decision_tree_info">
        <p className='decision_tree_info_title'>{title}</p>
        {renderDescription()}
      </div>
      <div className="decision_tree_download">
        <img 
          className={`decision_tree_image ${isHovered ? 'opaque' : ''}`}
          src={dataDecisionTree}
          alt="Gráfico de árvore de decisão"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      <a className='decision_tree_button' href={dataDecisionTree} target="_blank" rel="noopener noreferrer">
      Clique aqui para baixar a imagem
      </a>
      </div>
    </div>
  );
  
};

export default DecisionTreePlot;
