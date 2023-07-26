import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import finance_home from '../../assets/finance_home.jpg';
import "../../styles/global.css";
import "../../styles/data-analysis.css";
import CsvUpload from '../../components/CsvUpload';
import DataExclusiveSelection from '../../components/DataExclusiveSelection';
import DataMultiSelection from '../../components/DataMultiSelection';
import SamplingProgression from '../../components/SamplingProgression';
import LineChart from '../../components/LineChart';

function DataAnalysis() {
  const ADDRESS = process.env.REACT_APP_ADDRESS;
  const [fileId, setFileId] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [requestCompleted, setRequestCompleted] = useState(false);

  const [mediaModaMedianaReady, setMediaModaMedianaReady] = useState(false);
  const [tracesMediaModaMediana, setTracesMediaModaMediana] = useState([]);

  const [standardDeviationReady, setStandardDeviationReady] = useState(false);
  const [traceStandardDeviation, setTraceStandardDeviation] = useState([]);

  const [maxMinReady, setMaxMinReady] = useState(false);
  const [tracesMaxMin, setTracesMaxMin] = useState([]);

  const [skewnessReady, setSkewnessReady] = useState(false);
  const [tracesSkewness, setTracesSkewness] = useState([]);

  const [loading, setLoading] = useState(false);



  useEffect(() => {
    console.log(fileId);
    console.log(fileName);
    console.log(loading)
  }, [fileId, fileName,loading]);

  useEffect(() => {
    console.log(requestCompleted)
  }, [requestCompleted]);

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

  const handleUploadSuccess = (fileId, fileName) => {
    setUploadCompleted(true);
    setFileId(fileId);
    setFileName(fileName);
  };

  const downloadCSV = async (updatedFileName, method) => {
    const BUCKET_NAME = process.env.REACT_APP_BUCKET_NAME;
    const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  
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
    const OAUTH2_TOKEN = data.access_token;
    console.log(OAUTH2_TOKEN);
    const url_base = `${fileId}/${updatedFileName}_${method}.csv`;
    console.log(url_base);
    const OBJECT_NAME = encodeURIComponent(url_base);
    const url = `https://storage.googleapis.com/storage/v1/b/${BUCKET_NAME}/o/${OBJECT_NAME}?alt=media`;
    const headers = {
      Authorization: `Bearer ${OAUTH2_TOKEN}`,
    };
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch CSV file.');
      }
  
      const csvData = await response.text();
      console.log(csvData);
  
      return csvData;
  
    } catch (error) {
      console.error('Error while fetching CSV:', error);
      return null;
      
    }
  };
  

  const handleSuperficialAnalysis = async (updatedFileName) => {
    try {
      const response = await fetch(`${ADDRESS}/superficial_analysis/${fileId}/${updatedFileName}`);
      if (response.ok) {
        console.log("Superficial analysis completed");
        const csvData = await downloadCSV(updatedFileName, 'superficial_analysis');
        if (csvData) {
          const rows = csvData.split('\n');
          const headersRow = rows[0].split(',');
          const vKeys = headersRow.slice(2).filter(key => key.startsWith('V'));

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
            name: 'Valores máximos',
          }
        ];
        setTracesSkewness(tracesSkewness);
        setSkewnessReady(true);

        } else {
          console.error('Failed to fetch CSV data.');
        }
      } else {
        console.error('Failed to fetch balance data.');
      }
    } catch (error) {
      console.error('Error fetching balance data:', error);
    }
  };
  

  
  
  const handleRequest = async () => {
    console.log(selectedKeys);
    console.log(selectedItems);
    const { samplingSelected, outlierTreatmentSelected, outlierRemovalSelected } = selectedKeys;
    const toastRemoval = () => toast.error("Por favor, escolha um método de detecção de outliers ao selecionar a remoção de outliers.", { autoClose: 8000 });
  
    if (!outlierTreatmentSelected && outlierRemovalSelected) {
      toastRemoval();
      return;
    }
  
    if (samplingSelected) {
      setLoading(true);
      setRequestCompleted(false);
      try {
        const response = await fetch(`${ADDRESS}/balance/${fileId}/${fileName}?method=${selectedKeys.samplingSelected.key}`);
        if (response.ok) {
          const data = await response.json();
          const responseString = data.message;
          const splitString = responseString.split('/');
          const newFileId = splitString[splitString.length - 2];
          const newFileName = splitString[splitString.length - 1].split('.').slice(0, -1).join('.');
          setFileId(newFileId);
          setFileName(newFileName);
          setRequestCompleted(true);
          await handleSuperficialAnalysis(newFileName);
        } else {
          console.error('Failed to fetch balance data.');
        }
      } catch (error) {
        console.error('Error fetching balance data:', error);
      }
    } else {
      console.log("Método de amostragem não selecionado")
      await handleSuperficialAnalysis(fileName);

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
          <>
            <button className="data_analysis_submit_button" onClick={() => {
              handleRequest(); 
            }}>
            Analisar
            </button>
            {selectedKeys.samplingSelected && loading && (
              <SamplingProgression requestCompleted={requestCompleted} />
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
                title="Assimetria das features"
                xTitle="Features"
                yTitle="Valores"
                description={`A assimetria das features é uma medida estatística que indica a tendência de distribuição dos dados em relação à média. Se a distribuição é simétrica, a assimetria é próxima de zero; se é assimétrica, pode ser positiva ou negativa. Ela revela a forma e inclinação da distribuição dos dados, fornecendo insights valiosos para análise e interpretação dos mesmos.`}
              />
            }

          </>
        ) : (
          <p className="data_analysis_upload_info">Aguarde o upload do arquivo ser concluído para prosseguir.</p>
        )}


      </div>
    </div>
  );
}

export default DataAnalysis;
