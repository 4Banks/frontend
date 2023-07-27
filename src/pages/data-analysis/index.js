import React, { useState, useEffect } from 'react';
import finance_home from '../../assets/finance_home.jpg';
import "../../styles/global.css";
import "../../styles/data-analysis.css";
import CsvUpload from '../../components/CsvUpload';
import DataProcessing from '../../components/DataProcessing';
import AnalysisSelection from '../../components/AnalysisSelection';
import LineChart from '../../components/LineChart';
import ProgressionBar from '../../components/ProgressionBar';
import MachineLearningPlot from '../../components/MachineLearningPlot';
import ConfusionMatrixPlot from '../../components/ConfusionMatrixPlot';
import FeatureImportancePlot from '../../components/FeatureImportancePlot';

function DataAnalysis() {
  const ADDRESS = process.env.REACT_APP_ADDRESS;
  const [fileId, setFileId] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [loadingSuperficialAnalysis, setLoadingSuperficialAnalysis] = useState(false);
  // const [loadingAnomalyDetection, setLoadingAnomalyDetection] = useState(false);

  const [mediaModaMedianaReady, setMediaModaMedianaReady] = useState(false);
  const [tracesMediaModaMediana, setTracesMediaModaMediana] = useState([]);

  const [standardDeviationReady, setStandardDeviationReady] = useState(false);
  const [traceStandardDeviation, setTraceStandardDeviation] = useState([]);

  const [maxMinReady, setMaxMinReady] = useState(false);
  const [tracesMaxMin, setTracesMaxMin] = useState([]);

  const [skewnessReady, setSkewnessReady] = useState(false);
  const [tracesSkewness, setTracesSkewness] = useState([]);

  const [kurtosisReady, setKurtosisReady] = useState(false);
  const [tracesKurtosis, setTracesKurtosis] = useState([]);


  const [iqrReady, setIqrReady] = useState(false);
  const [tracesIqr, setTracesIqr] = useState([]);

  const [rangeValuesReady, setRangeValuesReady] = useState(false);
  const [tracesRangeValues, setTracesRangeValues] = useState([]);

  const [basicAnalysisReady, setBasicAnalysisReady] = useState(false);
  const [tracesBasicAnalysis, setTracesBasicAnalysis] = useState([]);

  const [loadingLogisticRegression, setLoadingLogisticRegression] = useState(false);
  const [logisticRegressionStatus, setLogisticRegressionStatus] = useState(false);
  const [dataLogisticRegression, setDataLogisticRegression] = useState([]);

  const [loadingXGBoost, setLoadingXGBoost] = useState(false);
  const [XGBoostStatus, setXGBoostStatus] = useState("running");
  const [dataXGBoost, setDataXGBoost] = useState([]);

  const [loadingLightGBM, setLoadingLightGBM] = useState(false);
  const [LightGBMStatus, setLightGBMStatus] = useState("running");
  const [dataLightGBM, setDataLightGBM] = useState([]);

  const [loadingMLP, setLoadingMLP] = useState(false);
  const [MLPStatus, setMLPStatus] = useState("running");
  const [dataMLP, setDataMLP] = useState([]);

  const [loadingRandomForest, setLoadingRandomForest] = useState(false);
  const [randomForestStatus, setRandomForestStatus] = useState("running");
  const [dataRandomForest, setDataRandomForest] = useState([]);



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
  
      const data = await response.text();
      return data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  }

  const getData = async (fileName, method, time, maxAttempts, extension) => {
    const BUCKET_NAME = process.env.REACT_APP_BUCKET_NAME;
    const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  
    const getAccessToken = async () => {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: REFRESH_TOKEN,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }),
      });
  
      const data = await response.json();
      return data.access_token;
    };
  
    const tryFetch = async (headers,extension) => {
      setTimeout(time * 1000);
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch file.');
        }
        if(extension === "json"){
          return await response.json();
        }else{
        return await response.text();
        }
      } catch (error) {
        console.error('Error while fetching file:', error);
        return null;
      }
    };
  
    const OAUTH2_TOKEN = await getAccessToken();
    const url_base = `${fileId}/${fileName}_${method}.${extension}`;
    const OBJECT_NAME = encodeURIComponent(url_base);
    const url = `https://storage.googleapis.com/storage/v1/b/${BUCKET_NAME}/o/${OBJECT_NAME}?alt=media`;
    const headers = {
      Authorization: `Bearer ${OAUTH2_TOKEN}`,
    };
  
    let attempts = 0;
    let data = null;
  
    while (attempts < maxAttempts) {
      data = await tryFetch(headers,extension);
      if (data !== null) {
        return data;
      }
  
      attempts++;
      if (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, time * 1000));
      }
    }
  
    console.error('Maximum attempts reached. Failed to fetch CSV.');
    return null;
  };

  async function getContentFromURL(endpoint, fileId) {
    const baseURL = `${ADDRESS}/${endpoint}/${fileId}`;
    try {
      const response = await fetch(baseURL);
      
      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }
      const data = await response.json();
      const content = Array.isArray(data) ? data : [data];
      return content;
    } catch (error) {
      console.error("Error fetching content:", error);
      return null;
    }
  }

  const handleXGBoost = async (fileId, fileName) => {
    setLoadingXGBoost(true);
    try {
      const status_xgboost = await checkStatusForDataWithRetry(fileId, "xgboost");
      if (status_xgboost === "finished") {
        const data_xgboost = await getData(fileName, 'xgboost', 15, 10, "json");
        if (data_xgboost) {
          console.log(data_xgboost);
          setDataXGBoost(data_xgboost);
          setXGBoostStatus(status_xgboost);
          setLoadingXGBoost(false);
        }
      } else if (status_xgboost === "running") {
        setTimeout(() => {
          handleXGBoost(fileId, fileName);
        }, 10000);
      } else {
        setXGBoostStatus(status_xgboost);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoadingXGBoost(false);
    }
  };

  const handleRandomForest = async (fileId, fileName) => {
    setLoadingRandomForest(true);
    try {
      const status_random_forest = await checkStatusForDataWithRetry(fileId, "random_forest");
      if (status_random_forest === "finished") {
        const data_random_forest = await getData(fileName, 'random_forest', 15, 10, "json");
        if (data_random_forest) {
          console.log(data_random_forest);
          setDataRandomForest(data_random_forest);
          setRandomForestStatus(status_random_forest);
          setLoadingRandomForest(false);
        }
      } else if (status_random_forest === "running") {
        setTimeout(() => {
          handleRandomForest(fileId, fileName);
        }, 10000);
      } else {
        setRandomForestStatus(status_random_forest);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoadingRandomForest(false);
    }
  };

  const handleMLP = async (fileId, fileName) => {
    setLoadingMLP(true);
    try {
      const status_mlp = await checkStatusForDataWithRetry(fileId, "mlp");
      if (status_mlp === "finished") {
        const data_mlp = await getData(fileName, 'mlp', 15, 10, "json");
        if (data_mlp) {
          console.log(data_mlp);
          setDataMLP(data_mlp);
          setMLPStatus(status_mlp);
          setLoadingMLP(false);
        }
      } else if (status_mlp === "running") {
        setTimeout(() => {
          handleMLP(fileId, fileName);
        }, 10000);
      } else {
        setMLPStatus(status_mlp);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoadingMLP(false);
    }
  };

  const handleLightGBM = async (fileId, fileName) => {
    setLoadingLightGBM(true);
    try {
      const status_lightgbm = await checkStatusForDataWithRetry(fileId, "lightgbm");
      if (status_lightgbm === "finished") {
        const data_lightgbm = await getData(fileName, 'lightgbm', 15, 10, "json");
        if (data_lightgbm) {
          console.log(data_lightgbm);
          setDataLightGBM(data_lightgbm);
          setLightGBMStatus(status_lightgbm);
          setLoadingLightGBM(false);
        }
      } else if (status_lightgbm === "running") {
        setTimeout(() => {
          handleLightGBM(fileId, fileName);
        }, 10000);
      } else {
        setLightGBMStatus(status_lightgbm);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoadingLightGBM(false);
    }
  };

  
  const handleLogisticRegression = async (fileId, fileName) => {
    try {
      const status_logistic_regression = await checkStatusForDataWithRetry(fileId, "logistic_regression");
      if (status_logistic_regression === "finished") {
        const data_xgboost = await getData(fileName, 'logistic_regression', 15, 10, "json");
        if (data_xgboost) {
          console.log(data_xgboost);
          setDataLogisticRegression(data_xgboost);
          setLogisticRegressionStatus(status_logistic_regression);
          setLoadingLogisticRegression(false);
        }
      } else if (status_logistic_regression === "running") {
        setTimeout(() => {
          handleLogisticRegression(fileId, fileName);
        }, 10000);
      } else {
        setLogisticRegressionStatus(status_logistic_regression);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoadingLogisticRegression(false);
    }
  };

  function checkStatus(arrayFinished, arrayRunning, arrayFailed, modelName) {
    if (arrayRunning.some(item => item.model_name === modelName)) {
      console.log("running")
      return "running";
    } else if (arrayFailed.some(item => item.model_name === modelName)) {
      console.log("failed")
      return "failed";
    } else if (arrayFinished.some(item => item.model_name === modelName)) {
      console.log("finished")
      return "finished";
    } else {
      console.log("not found")
      return "not found";
    }
  }

  async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

    async function checkStatusForDataWithRetry(fileId, modelName, retryCount = 3) {
      try {
        let runningData = await getContentFromURL("running_training_tasks", fileId);
        let finishedData = await getContentFromURL("finished_training_tasks", fileId);
        let failedData = await getContentFromURL("failed_training_tasks", fileId);
    
        const status = checkStatus(finishedData, runningData, failedData, modelName);
    
        if (status === "not found" && retryCount > 0) {
          console.error("Model not found. Retrying...");
          await wait(10000);
          return checkStatusForDataWithRetry(fileId, modelName, retryCount - 1);
        }
    
        return status;
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
  

  const handleSuperficialAnalysis = async (fileName) => {
    setLoadingSuperficialAnalysis(true);
    try {
        const csvData = await getData(fileName, 'superficial_analysis',15,10,"csv");
        if (csvData) {
          const rows = csvData.split('\n');
          const headersRow = rows[0].split(',');
          const vKeys = headersRow.slice(2).filter(key => key !== "Time" && (key.startsWith('V') || key === "Amount"));
          console.log(vKeys);
          const meanRow = rows.find(row => row.startsWith('Média'));
          const modeRow = rows.find(row => row.startsWith('Moda'));
          const medianRow = rows.find(row => row.startsWith('Mediana'));
          const meanValues = meanRow.split(',').slice(2).map(value => parseFloat(value));
          const modeValues = modeRow.split(',').slice(2).map(value => parseFloat(value));
          const medianValues = medianRow.split(',').slice(2).map(value => parseFloat(value));

          const tracesMediaModaMediana = [
            {
              x: vKeys,
              y: meanValues,
              type: 'scatter',
              name: 'Média',
            },
            {
              x: vKeys,
              y: modeValues,
              type: 'scatter',
              name: 'Moda',
            },
            {
              x: vKeys,
              y: medianValues,
              type: 'scatter',
              name: 'Mediana',
            },
          ];
          setTracesMediaModaMediana(tracesMediaModaMediana);
          setMediaModaMedianaReady(true);

          const standardDeviationRow = rows.find(row => row.startsWith('Desvio padrão'));
          const standardDeviationValues = standardDeviationRow.split(',').slice(2).map(value => parseFloat(value));
          console.log(standardDeviationValues);
          const traceStandardDeviation = 
            [{
              x: vKeys,
              y: standardDeviationValues,
              type: 'scatter',
              name: 'Desvio padrão',
            }];
          setTraceStandardDeviation(traceStandardDeviation);
          setStandardDeviationReady(true);


          const maxRow = rows.find(row => row.startsWith('Valor máximo'));
          const minRow = rows.find(row => row.startsWith('Valor mínimo'));

          const maxValues = maxRow.split(',').slice(2).map(value => parseFloat(value));
          const minValues = minRow.split(',').slice(2).map(value => parseFloat(value));

          const tracesMaxMin = 
            [{
              x: vKeys,
              y: maxValues,
              type: 'scatter',
              name: 'Valores máximos',
            },
            {
              x: vKeys,
              y: minValues,
              type: 'scatter',
              name: 'Valores mínimos',
            }
          ];
          setTracesMaxMin(tracesMaxMin);
          setMaxMinReady(true);
          
          const skewnessRow = rows.find(row => row.startsWith('Assimetria'));

          const skewnessValues = skewnessRow.split(',').slice(2).map(value => parseFloat(value));

          const tracesSkewness = 
          [{
            x: vKeys,
            y: skewnessValues,
            type: 'scatter',
            name: 'Assimetria',
          }
        ];
        setTracesSkewness(tracesSkewness);
        setSkewnessReady(true);

        const kurtosisRow = rows.find(row => row.startsWith('Curtose'));

        const kurtosisValues = kurtosisRow.split(',').slice(2).map(value => parseFloat(value));

        const tracesKurtosis = 
        [{
          x: vKeys,
          y: kurtosisValues,
          type: 'scatter',
          name: 'Curtose',
        }
      ];
      setTracesKurtosis(tracesKurtosis);
      setKurtosisReady(true);


      const iqrRow = rows.find(row => row.startsWith('IQR'));

      const iqrValues = iqrRow.split(',').slice(2).map(value => parseFloat(value));

      const tracesIqr = 
      [{
        x: vKeys,
        y: iqrValues,
        type: 'scatter',
        name: 'Amplitude interquartil (IQR)',
      }
    ];
    setTracesIqr(tracesIqr);
    setIqrReady(true);

      const rangeValuesRow = rows.find(row => row.startsWith('Intervalo de valores'));
      const rangeValuesValues = rangeValuesRow.split(',').slice(2).map(value => parseFloat(value));
      const tracesRangeValues = 
      [{
        x: vKeys,
        y: rangeValuesValues,
        type: 'scatter',
        name: 'Amplitude interquartil (IQR)',
      }
    ];
    setTracesRangeValues(tracesRangeValues);
    setRangeValuesReady(true);
    
    const emptyFieldsRow = rows.find(row => row.startsWith('Campos vazios'));
    const emptyFieldsPercentageRow = rows.find(row => row.startsWith('Campos vazios (%)'));
    const nullFieldsRow = rows.find(row => row.startsWith('Campos com valor zero'));


    const emptyFieldsValues = emptyFieldsRow.split(',').slice(2).map(value => parseFloat(value));
    const emptyFieldsPercentageValues = emptyFieldsPercentageRow.split(',').slice(2).map(value => parseFloat(value));
    const nullFieldsValues = nullFieldsRow.split(',').slice(2).map(value => parseFloat(value));

    const tracesBasicAnalysis = 
    [{
      x: vKeys,
      y: emptyFieldsValues,
      type: 'scatter',
      name: 'Campos vazios',
    },
    {
      x: vKeys,
      y: emptyFieldsPercentageValues,
      type: 'scatter',
      name: 'Porcentagem de Campos vazios',
    },
    {
      x: vKeys,
      y: nullFieldsValues,
      type: 'scatter',
      name: 'Campos com valor zero',
    }

  ];
  setTracesBasicAnalysis(tracesBasicAnalysis);
  setBasicAnalysisReady(true);
  setLoadingSuperficialAnalysis(false);
      } else {
        console.error('Failed to fetch balance data.');
      }
    } catch (error) {
      console.error('Error fetching balance data:', error);
    }
  };

  const handleRequest = async () => {
  console.log("Enviou requisição");
  if (uploadCompleted && fileId && fileName) {
    try {
      const fetchedData = await fetchDataAndProcess(attributes);
      if(fetchedData) {
        console.log(fetchedData);
        if(attributes.superficial_analysis){
          handleSuperficialAnalysis(fileName);
        }
        if(attributes.ml_logistic_regression){
          handleLogisticRegression(fileId, fileName);
        }
        if(attributes.ml_xgboost){
          handleXGBoost(fileId,fileName);
        }
        if(attributes.ml_lightgbm){
          handleLightGBM(fileId,fileName);
        }
        if(attributes.ml_mlp){
          handleMLP(fileId,fileName);
        }
        if(attributes.ml_random_forest){
          handleRandomForest(fileId,fileName);
        }
        if(attributes.anomaly_detection){
          // setLoadingAnomalyDetection(true);
        }
      }
    } catch (error) {
      console.error('Error processing data:', error);
    }
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
          <div className="data_analysis_results">
            <div className="data_analysis_submit_button_container">
              <button className="data_analysis_submit_button" onClick={() => {
                handleRequest(); 
              }}>
              Analisar
              </button>
            </div>


            {selectedItems.analysisDataSelected.length > 0 && loadingSuperficialAnalysis && (
              <ProgressionBar requestCompleted={mediaModaMedianaReady || standardDeviationReady ||  maxMinReady || skewnessReady || kurtosisReady || iqrReady || rangeValuesReady || basicAnalysisReady} title={"Carregando análises superficiais"} />
            )}

            {selectedItems.analysisDataSelected.includes("media_moda_mediana") && mediaModaMedianaReady && 
            <LineChart
                traces={tracesMediaModaMediana}
                title="Média, moda e mediana das features"
                xTitle="Features"
                yTitle="Valores"
                description={`Média: Valor obtido pela soma de todos os elementos de um conjunto dividido pelo número de elementos presentes.
                Mediana: Valor central de um conjunto ordenado, separando-o em duas partes iguais.
                Moda: O valor que mais se repete em um conjunto de dados, podendo haver mais de uma moda ou nenhuma.`}
              />
            }

            {selectedItems.analysisDataSelected.includes("desvio_padrao") && standardDeviationReady && 
            <LineChart
                traces={traceStandardDeviation}
                title="Desvio padrão das features"
                xTitle="Features"
                yTitle="Valores"
                description={` Medida estatística que indica a dispersão dos valores em relação à média, expressando o quanto os dados se afastam do valor médio do conjunto, fornecendo uma noção da variabilidade dos dados. Quanto maior o desvio padrão, maior a dispersão dos dados em relação à média.`}
              />
            }

            {selectedItems.analysisDataSelected.includes("max_min") && maxMinReady && 
            <LineChart
                traces={tracesMaxMin}
                title="Valor máximo e mínimo das features"
                xTitle="Features"
                yTitle="Valores"
                description={`O valor máximo é o maior número encontrado no conjunto de dados, enquanto o valor mínimo é o menor. Essas medidas indicam a amplitude dos valores e a variabilidade dos dados. Um amplo intervalo sugere maior dispersão, e um intervalo estreito indica maior concentração em torno da média.`}
              />
            }

            {selectedItems.analysisDataSelected.includes("assimetria") && skewnessReady && 
            <LineChart
                traces={tracesSkewness}
                title="Assimetria"
                xTitle="Features"
                yTitle="Valores"
                description={`A assimetria das features é uma medida estatística que indica a tendência de distribuição dos dados em relação à média. Se a distribuição é simétrica, a assimetria é próxima de zero; se é assimétrica, pode ser positiva ou negativa. Ela revela a forma e inclinação da distribuição dos dados, fornecendo insights valiosos para análise e interpretação dos mesmos.`}
              />
            }

            {selectedItems.analysisDataSelected.includes("curtose") && kurtosisReady && 
            <LineChart
                traces={tracesKurtosis}
                title="Curtose"
                xTitle="Features"
                yTitle="Valores"
                description={`Curtose é uma medida estatística que indica o achatamento e a forma da distribuição dos dados em relação à média. Valores maiores indicam maior concentração dos dados em torno da média e caudas mais pesadas, enquanto valores menores sugerem maior dispersão dos dados e caudas mais leves. A curtose é importante para entender a variabilidade e a presença de outliers em um conjunto de dados, auxiliando na análise dos padrões estatísticos.`}
              />
            }

            {selectedItems.analysisDataSelected.includes("iqr") && iqrReady && 
            <LineChart
                traces={tracesIqr}
                title="Amplitude interquartil (IQR)"
                xTitle="Features"
                yTitle="Valores"
                description={`Medida estatística que representa a diferença entre o terceiro quartil (75º percentil) e o primeiro quartil (25º percentil) de um conjunto de dados ordenado. Ela descreve a variação central dos dados, ignorando valores extremos, sendo uma medida mais robusta em relação à presença de outliers.`}
              />
            }

            {selectedItems.analysisDataSelected.includes("intervalo_valores") && rangeValuesReady && 
            <LineChart
                traces={tracesRangeValues}
                title="Intervalo de valores"
                xTitle="Features"
                yTitle="Valores"
                description={`O intervalo de valores é a diferença entre o maior e o menor valor em um conjunto de dados. Essa medida simples de dispersão oferece uma visão básica da variação dos dados, mas pode ser afetada por valores extremos.`}
              />
            }

            {selectedItems.analysisDataSelected.includes("intervalo_valores") && basicAnalysisReady && 
            <LineChart
                traces={tracesBasicAnalysis}
                title="Análise básica"
                xTitle="Features"
                yTitle="Valores"
                description={`Número e porcentagem de dados faltantes e número de campos com o valor zero.`}
              />
            }

            {selectedItems.machineLearningSelected.includes("ml_logistic_regression") &&  loadingLogisticRegression && (
              <ProgressionBar requestCompleted={logisticRegressionStatus} title={"Carregando Regressão Logistica"} />
            )}
            {selectedItems.machineLearningSelected.includes("ml_logistic_regression") && logisticRegressionStatus === "finished" && 
            <div>
            <MachineLearningPlot
              performanceMetrics={dataLogisticRegression.performance_metrics}
              confusionMatrix={dataLogisticRegression.confusion_matrix}
              title="Regressão Logística Métricas"
              performanceMetricsDescription={`Precision: Mede a proporção de verdadeiros positivos em relação aos exemplos classificados como positivos pelo modelo. Indica a capacidade de identificar corretamente casos relevantes, com poucos falsos positivos.
                                              
                                              Recall (Sensibilidade): Mede a proporção de verdadeiros positivos em relação a todos os exemplos que realmente são positivos. Indica a capacidade do modelo de encontrar todos os casos relevantes, evitando falsos negativos.
                                              
                                              F1-Score: É a média harmônica da precisão e do recall. Equilibra ambas as métricas e é útil em problemas de classificação com desequilíbrio de classes, considerando falsos positivos e falsos negativos.`}
            />
            <ConfusionMatrixPlot
              performanceMetrics={dataLogisticRegression.performance_metrics}
              confusionMatrix={dataLogisticRegression.confusion_matrix}
              title="Regressão Logística Matriz de Confusão"
              confusionMatrixDescription={`A matriz de confusão é uma tabela que compara as previsões de um modelo de classificação com os rótulos verdadeiros. 
              
              Ela possui quatro elementos principais: Verdadeiros Positivos (TP), Verdadeiros Negativos (TN), Falsos Positivos (FP) e Falsos Negativos (FN). Essa matriz ajuda a avaliar o desempenho do modelo e calcular métricas importantes, como precisão e recall.
              
                                          É uma ferramenta essencial para entender e ajustar o modelo para melhorar suas previsões.`}  
            />
              <FeatureImportancePlot 
              featureImportance={dataLogisticRegression.feature_importance}
              title="Regressão Logística Feature Importance"
              featureImportanceDescription={`Feature Importance, ou Importância das Variáveis, é uma técnica essencial em ciência de dados e aprendizado de máquina.
              
              Ela quantifica a contribuição relativa de cada variável no desempenho do modelo. Ao identificar as características mais influentes, é possível tomar decisões embasadas, otimizar o modelo e melhorar a interpretabilidade dos resultados.
              
              É uma etapa crucial para resolver problemas complexos em diversas áreas.`}
            />
            </div>

            
            }

            {selectedItems.machineLearningSelected.includes("ml_xgboost") && loadingXGBoost && (
              <ProgressionBar requestCompleted={XGBoostStatus} title={"Carregando XGBoost"} />
            )}

            {selectedItems.machineLearningSelected.includes("ml_xgboost") && XGBoostStatus === "finished" && 
            <div>
            <MachineLearningPlot
              performanceMetrics={dataXGBoost.performance_metrics}
              confusionMatrix={dataXGBoost.confusion_matrix}
              title="XGBoost Métricas"
              performanceMetricsDescription={`Precision: Mede a proporção de verdadeiros positivos em relação aos exemplos classificados como positivos pelo modelo. Indica a capacidade de identificar corretamente casos relevantes, com poucos falsos positivos.
                                              
                                              Recall (Sensibilidade): Mede a proporção de verdadeiros positivos em relação a todos os exemplos que realmente são positivos. Indica a capacidade do modelo de encontrar todos os casos relevantes, evitando falsos negativos.
                                              
                                              F1-Score: É a média harmônica da precisão e do recall. Equilibra ambas as métricas e é útil em problemas de classificação com desequilíbrio de classes, considerando falsos positivos e falsos negativos.`}
            />
            <ConfusionMatrixPlot
              confusionMatrix={dataXGBoost.confusion_matrix}
              title="XGBoost Matriz de confusão"
              confusionMatrixDescription={`A matriz de confusão é uma tabela que compara as previsões de um modelo de classificação com os rótulos verdadeiros. 
              
              Ela possui quatro elementos principais: Verdadeiros Positivos (TP), Verdadeiros Negativos (TN), Falsos Positivos (FP) e Falsos Negativos (FN). Essa matriz ajuda a avaliar o desempenho do modelo e calcular métricas importantes, como precisão e recall. 
              
              É uma ferramenta essencial para entender e ajustar o modelo para melhorar suas previsões.`}
            />
            <FeatureImportancePlot 
              featureImportance={dataXGBoost.feature_importance}
              title="XGBoost Feature Importance"
              featureImportanceDescription={`Feature Importance, ou Importância das Variáveis, é uma técnica essencial em ciência de dados e aprendizado de máquina.
              
              Ela quantifica a contribuição relativa de cada variável no desempenho do modelo. Ao identificar as características mais influentes, é possível tomar decisões embasadas, otimizar o modelo e melhorar a interpretabilidade dos resultados.
              
              É uma etapa crucial para resolver problemas complexos em diversas áreas.`}
            />
            </div>
            }


            {selectedItems.machineLearningSelected.includes("ml_lightgbm") && loadingLightGBM && (
              <ProgressionBar requestCompleted={LightGBMStatus} title={"Carregando LightGBM"} />
            )}

            {selectedItems.machineLearningSelected.includes("ml_lightgbm") && LightGBMStatus === "finished" && 
            <div>
            <MachineLearningPlot
              performanceMetrics={dataLightGBM.performance_metrics}
              confusionMatrix={dataLightGBM.confusion_matrix}
              title="LightGBM Métricas"
              performanceMetricsDescription={`Precision: Mede a proporção de verdadeiros positivos em relação aos exemplos classificados como positivos pelo modelo. Indica a capacidade de identificar corretamente casos relevantes, com poucos falsos positivos.
                                              
                                              Recall (Sensibilidade): Mede a proporção de verdadeiros positivos em relação a todos os exemplos que realmente são positivos. Indica a capacidade do modelo de encontrar todos os casos relevantes, evitando falsos negativos.
                                              
                                              F1-Score: É a média harmônica da precisão e do recall. Equilibra ambas as métricas e é útil em problemas de classificação com desequilíbrio de classes, considerando falsos positivos e falsos negativos.`}
            />
            <ConfusionMatrixPlot
              confusionMatrix={dataLightGBM.confusion_matrix}
              title="LightGBM Matriz de confusão"
              confusionMatrixDescription={`A matriz de confusão é uma tabela que compara as previsões de um modelo de classificação com os rótulos verdadeiros. 
              
              Ela possui quatro elementos principais: Verdadeiros Positivos (TP), Verdadeiros Negativos (TN), Falsos Positivos (FP) e Falsos Negativos (FN). Essa matriz ajuda a avaliar o desempenho do modelo e calcular métricas importantes, como precisão e recall. 
              
              É uma ferramenta essencial para entender e ajustar o modelo para melhorar suas previsões.`}
            />
            <FeatureImportancePlot 
              featureImportance={dataLightGBM.feature_importance}
              title="LightGBM Feature Importance"
              featureImportanceDescription={`Feature Importance, ou Importância das Variáveis, é uma técnica essencial em ciência de dados e aprendizado de máquina.
              
              Ela quantifica a contribuição relativa de cada variável no desempenho do modelo. Ao identificar as características mais influentes, é possível tomar decisões embasadas, otimizar o modelo e melhorar a interpretabilidade dos resultados.
              
              É uma etapa crucial para resolver problemas complexos em diversas áreas.`}
            />
            </div>
            }

            {selectedItems.machineLearningSelected.includes("ml_mlp") && loadingMLP && (
              <ProgressionBar requestCompleted={MLPStatus} title={"Carregando MLP"} />
            )}

            {selectedItems.machineLearningSelected.includes("ml_mlp") && MLPStatus === "finished" && 
            <div>
            <MachineLearningPlot
              performanceMetrics={dataMLP.performance_metrics}
              confusionMatrix={dataMLP.confusion_matrix}
              title="MLP Métricas"
              performanceMetricsDescription={`Precision: Mede a proporção de verdadeiros positivos em relação aos exemplos classificados como positivos pelo modelo. Indica a capacidade de identificar corretamente casos relevantes, com poucos falsos positivos.
                                              
                                              Recall (Sensibilidade): Mede a proporção de verdadeiros positivos em relação a todos os exemplos que realmente são positivos. Indica a capacidade do modelo de encontrar todos os casos relevantes, evitando falsos negativos.
                                              
                                              F1-Score: É a média harmônica da precisão e do recall. Equilibra ambas as métricas e é útil em problemas de classificação com desequilíbrio de classes, considerando falsos positivos e falsos negativos.`}
            />
            <ConfusionMatrixPlot
              confusionMatrix={dataMLP.confusion_matrix}
              title="MLP Matriz de confusão"
              confusionMatrixDescription={`A matriz de confusão é uma tabela que compara as previsões de um modelo de classificação com os rótulos verdadeiros. 
              
              Ela possui quatro elementos principais: Verdadeiros Positivos (TP), Verdadeiros Negativos (TN), Falsos Positivos (FP) e Falsos Negativos (FN). Essa matriz ajuda a avaliar o desempenho do modelo e calcular métricas importantes, como precisão e recall. 
              
              É uma ferramenta essencial para entender e ajustar o modelo para melhorar suas previsões.`}
            />
            <FeatureImportancePlot 
              featureImportance={dataMLP.feature_importance}
              title="MLP Feature Importance"
              featureImportanceDescription={`Feature Importance, ou Importância das Variáveis, é uma técnica essencial em ciência de dados e aprendizado de máquina.
              
              Ela quantifica a contribuição relativa de cada variável no desempenho do modelo. Ao identificar as características mais influentes, é possível tomar decisões embasadas, otimizar o modelo e melhorar a interpretabilidade dos resultados.
              
              É uma etapa crucial para resolver problemas complexos em diversas áreas.`}
            />
            </div>
            }
            {selectedItems.machineLearningSelected.includes("ml_random_forest") && loadingRandomForest && (
              <ProgressionBar requestCompleted={randomForestStatus} title={"Carregando Random Forest"} />
            )}

            {selectedItems.machineLearningSelected.includes("ml_random_forest") && randomForestStatus === "finished" && 
            <div>
            <MachineLearningPlot
              performanceMetrics={dataRandomForest.performance_metrics}
              confusionMatrix={dataRandomForest.confusion_matrix}
              title="Random Forest Métricas"
              performanceMetricsDescription={`Precision: Mede a proporção de verdadeiros positivos em relação aos exemplos classificados como positivos pelo modelo. Indica a capacidade de identificar corretamente casos relevantes, com poucos falsos positivos.
                                              
                                              Recall (Sensibilidade): Mede a proporção de verdadeiros positivos em relação a todos os exemplos que realmente são positivos. Indica a capacidade do modelo de encontrar todos os casos relevantes, evitando falsos negativos.
                                              
                                              F1-Score: É a média harmônica da precisão e do recall. Equilibra ambas as métricas e é útil em problemas de classificação com desequilíbrio de classes, considerando falsos positivos e falsos negativos.`}
            />
            <ConfusionMatrixPlot
              confusionMatrix={dataRandomForest.confusion_matrix}
              title="Random Forest Matriz de confusão"
              confusionMatrixDescription={`A matriz de confusão é uma tabela que compara as previsões de um modelo de classificação com os rótulos verdadeiros. 
              
              Ela possui quatro elementos principais: Verdadeiros Positivos (TP), Verdadeiros Negativos (TN), Falsos Positivos (FP) e Falsos Negativos (FN). Essa matriz ajuda a avaliar o desempenho do modelo e calcular métricas importantes, como precisão e recall. 
              
              É uma ferramenta essencial para entender e ajustar o modelo para melhorar suas previsões.`}
            />
            <FeatureImportancePlot 
              featureImportance={dataRandomForest.feature_importance}
              title="Random Forest Feature Importance"
              featureImportanceDescription={`Feature Importance, ou Importância das Variáveis, é uma técnica essencial em ciência de dados e aprendizado de máquina.
              
              Ela quantifica a contribuição relativa de cada variável no desempenho do modelo. Ao identificar as características mais influentes, é possível tomar decisões embasadas, otimizar o modelo e melhorar a interpretabilidade dos resultados.
              
              É uma etapa crucial para resolver problemas complexos em diversas áreas.`}
            />
            </div>
            }
            </div>
        ) : (
          <p className="data_analysis_upload_info">Aguarde o upload do arquivo ser concluído para prosseguir.</p>
        )}


      </div>
    </div>
  );
}

export default DataAnalysis;
