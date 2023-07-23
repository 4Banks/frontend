import React, { useState } from 'react';
import finance_home from '../../assets/finance_home.jpg';
import "../../styles/global.css";
import "../../styles/data-analysis.css";
import CsvUpload from '../../components/CsvUpload';
import DataExclusiveSelection from '../../components/DataExclusiveSelection';
import DataMultiSelection from '../../components/DataMultiSelection';

function DataAnalysis() {
  const [fileId, setFileId] = useState(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState({
    samplingSelected: null,
    outlierTreatmentSelected: null,
    outlierRemovalSelected: null,
  });

  const [selectedItems, setSelectedItems] = useState({
    analysisDataSelected: [],
    machineLearningSelected: [],
    anomalyDetectionSelected: [],
  });

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

  const handleUploadSuccess = (fileId) => {
    setUploadCompleted(true);
    setFileId(fileId);
  };

  const handleRequest = () => {
    console.log(selectedKeys);
    console.log(selectedItems);
    console.log(fileId);
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
            <DataExclusiveSelection
              selectedKeys={selectedKeys}
              handleExclusiveSelectionChange={handleExclusiveSelectionChange}
            />
            <DataMultiSelection
              selectedItems={selectedItems}
              handleMultiSelectionChange={handleMultiSelectionChange}
            />
          </>
        )}

        {uploadCompleted ? (
          <button className="data_analysis_submit_button" onClick={handleRequest}>Analisar</button>
        ) : (
          <p className="data_analysis_upload_info">Aguarde o upload do arquivo ser concluído para prosseguir.</p>
        )}
      </div>
    </div>
  );
}

export default DataAnalysis;
