import React, { useState, useEffect } from 'react';
import finance_home from '../../assets/finance_home.jpg';
import "../../styles/global.css";
import "../../styles/data-analysis.css";
import CsvUpload from '../../components/CsvUpload';
import DataProcessing from '../../components/DataProcessing';
import AnalysisSelection from '../../components/AnalysisSelection';

function DataAnalysis() {
  const ADDRESS = process.env.REACT_APP_ADDRESS;
  const [fileId, setFileId] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);

  useEffect(() => {
    console.log(fileId);
    console.log(fileName);
  }, [fileId, fileName]);


  const [selectedKeys, setSelectedKeys] = useState({
    balanceSelected: { key:"", item: "", description:  "" },
    outlierTreatmentSelected: { key:"", item: "", description:  "" },
    emptySetsTreatment: { key:"", item: "", description:  "" },
  });  

  const [selectedItems, setSelectedItems] = useState({
    outlierRemovalSelected: [],
    analysisDataSelected: [],
    machineLearningSelected: [],
    anomalyDetectionSelected: [],
  });

  const attributes = {
    index: false,
    missing_data_method: selectedKeys.emptySetsTreatment.key,
    outliers_z_score: selectedItems.outlierRemovalSelected.includes('outliers_z_score'),
    outliers_robust_z_score: selectedItems.outlierRemovalSelected.includes('outliers_robust_z_score'),
    outliers_iqr: selectedItems.outlierRemovalSelected.includes('outliers_iqr'),
    outliers_winsorization: selectedItems.outlierRemovalSelected.includes('outliers_winsorization'),
    outliers_treatment_method: selectedKeys.outlierTreatmentSelected.key,
    balance_method: selectedKeys.balanceSelected.key,
    superficial_analysis: selectedItems.analysisDataSelected.length > 0,
    ml_logistic_regression: selectedItems.machineLearningSelected.includes('ml_logistic_regression'),
    ml_decision_tree: selectedItems.machineLearningSelected.includes('ml_decision_tree'),
    ml_random_forest: selectedItems.machineLearningSelected.includes('ml_random_forest'),
    ml_xgboost: selectedItems.machineLearningSelected.includes('ml_xgboost'),
    ml_lightgbm: selectedItems.machineLearningSelected.includes('ml_lightgbm'),
    ml_mlp: selectedItems.machineLearningSelected.includes('ml_mlp'),
  };

  const handleExclusiveSelectionChange = (key, selectedItem) => {
    setSelectedKeys((prevSelectedKeys) => ({
      ...prevSelectedKeys,
      [key]: selectedItem,
    }));
  };

  const handleMultiSelectionChange = (group, selectedItems) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [group]: selectedItems,
    }));
  };

  const handleUploadSuccess = (fileId, fileName) => {
    setUploadCompleted(true);
    setFileId(fileId);
    setFileName(fileName);
  };

  async function fetchDataAndProcess(attributes) {
    const filteredAttributes = {};
    Object.keys(attributes).forEach(key => {
      const value = attributes[key];
      if (value !== null && value !== undefined && value !== '') {
        filteredAttributes[key] = value;
      }
    });
  
    const queryString = Object.keys(filteredAttributes)
      .map(key => `${key}=${filteredAttributes[key]}`)
      .join('&');
  
    const baseURL = `${ADDRESS}/pipeline/${fileId}/${fileName}`;
    const url = `${baseURL}${queryString ? '?' : ''}${queryString}`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  const handleRequest = async () => {
    console.log(selectedKeys);
    console.log(selectedItems);
    console.log(attributes);
    if (uploadCompleted && fileId && fileName) {
      fetchDataAndProcess(attributes);
    } else {
      console.error('File upload is not completed yet.');
    }
  };

  return (
    <div>
      <div className="data_analysis">
        <div className="data_analysis_intro">
          <div className="data_analysis_intro_info">
            <h1 className="title_home">4banks</h1>
            <p className='data_analysis_intro_info_text'>Descubra um mundo de possibilidades com o 4banks, nossa plataforma de análise de dados voltada para cientistas de dados do time de análise e detecção de fraudes em instituições financeiras. Com nossas ferramentas, você poderá explorar seus dados de transações bancárias de cartão de crédito e obter análises detalhadas, desde insights de alto nível até informações específicas. Nossa metodologia avançada facilita a tomada de decisões estratégicas, permitindo que você identifique padrões suspeitos e detecte atividades fraudulentas com precisão. Experimente agora e transforme seus dados em insights valiosos para proteger seus clientes e impulsionar a segurança financeira da sua instituição.</p>
            <CsvUpload onUploadSuccess={handleUploadSuccess} />
          </div>
          <div className="data_analysis_intro_info_image_container">
            <img src={finance_home} alt="finance_home" className='data_analysis_intro_info_image' />
          </div>
        </div>

        {uploadCompleted && (
          <>
            <DataProcessing
              selectedKeys={selectedKeys}
              selectedItems={selectedItems}
              handleExclusiveSelectionChange={handleExclusiveSelectionChange}
              handleMultiSelectionChange={handleMultiSelectionChange}

            />
            <AnalysisSelection
              selectedItems={selectedItems}
              handleMultiSelectionChange={handleMultiSelectionChange}
            />
          </>
        )}
        {uploadCompleted ? (
          <>
            <button className="data_analysis_submit_button" onClick={() => {
              handleRequest(); 
            }}>
            Analisar
            </button>
          </>
        ) : (
          <p className="data_analysis_upload_info">Aguarde o upload do arquivo ser concluído para prosseguir.</p>
        )}


      </div>
    </div>
  );
}

export default DataAnalysis;
