import React from 'react';
import MultiSelection from './MultiSelection';
import '../styles/global.css';
import '../styles/data-analysis-multi-selection.css'
import superficial_analysis from '../assets/superficial_analysis.svg'
import anomaly_detection from '../assets/anomaly_detection.svg'
import machine_learning from '../assets/machine_learning.svg'

function DataMultiSelection({ selectedItems, handleMultiSelectionChange }) {

    const analysisData = [
        {  key:"media_moda_mediana",  item: "Média, Mediana e Moda", description: "Média: Valor obtido pela soma de todos os elementos de um conjunto dividido pelo número de elementos presentes. \nMediana: Valor central de um conjunto ordenado, separando-o em duas partes iguais. \nModa: O valor que mais se repete em um conjunto de dados, podendo haver mais de uma moda ou nenhuma." },
        {  key:"desvio_padrao", item: "Desvio Padrão", description: "Desvio Padrão: Medida estatística que indica a dispersão dos valores em relação à média, expressando o quanto os dados se afastam do valor médio do conjunto, fornecendo uma noção da variabilidade dos dados. Quanto maior o desvio padrão, maior a dispersão dos dados em relação à média." },
        {  key:"iqr", item: "Amplitude interquartil (IQR)", description: "Amplitude interquartil: Medida estatística que representa a diferença entre o terceiro quartil (75º percentil) e o primeiro quartil (25º percentil) de um conjunto de dados ordenado. Ela descreve a variação central dos dados, ignorando valores extremos, sendo uma medida mais robusta em relação à presença de outliers." },
        {  key:"analise_basica", item: "Análise básica", description: "Número e porcentagem de dados faltantes e número de campos com o valor zero." },
        {  key:"assimetria", item: "Assimetria", description: "" },
        {  key:"curtose", item: "Curtose", description: "" },
        {  key:"intervalo_valores", item: "Intervalo de valores", description: "" },
        {  key:"max_min", item: "Máximos e mínimos", description: "O valor máximo é o maior número encontrado no conjunto de dados, enquanto o valor mínimo é o menor. Essas medidas indicam a amplitude dos valores e a variabilidade dos dados. Um amplo intervalo sugere maior dispersão, e um intervalo estreito indica maior concentração em torno da média." },
      ];
    
      const machineLearning = [
        {  key:"5", item: "Regressão Logística", description: "Regressão Logística: Modelo de aprendizado de máquina para classificação, que prevê a probabilidade de pertencer a uma classe e é comumente usado para problemas binários ou multiclasse." },
        {  key:"6", item: "Árvore de decisão", description: "Árvore de decisão: Algoritmo de aprendizado de máquina que usa uma estrutura em forma de árvore para tomar decisões sequenciais, dividindo os dados em subconjuntos até encontrar as melhores opções para classificação ou regressão, sendo valorizado por sua interpretabilidade e eficácia." },
        {  key:"7", item: "Random forest", description: "Random Forest: Algoritmo de aprendizado de máquina que constrói várias árvores de decisão durante o treinamento e, posteriormente, faz a predição combinando as respostas das árvores individuais. Essa técnica reduz o overfitting e aumenta a precisão geral, tornando-a amplamente utilizada em problemas de classificação e regressão." },
        {  key:"8", item: "XGBoost", description: "XGBoost (Extreme Gradient Boosting): É um algoritmo de aprendizado de máquina baseado em boosting que utiliza árvores de decisão como base para construir um modelo preditivo mais preciso. Ele otimiza a função de perda usando gradient boosting, combinando as previsões de várias árvores para melhorar a performance e eficiência em problemas de classificação, regressão e ranking. " },
        {  key:"9", item: "LightGBM", description: "" },
        {  key:"10", item: "SVM", description: "SVM (Support Vector Machine): Algoritmo de aprendizado de máquina supervisionado usado para resolver problemas de classificação e regressão. Ele busca encontrar o hiperplano que melhor separa os dados de diferentes classes no espaço de características, maximizando a margem entre as classes, sendo eficaz em lidar com dados de alta dimensionalidade." },
        {  key:"11", item: "AutoEncoder", description: "Autoencoder: Rede neural do tipo encoder-decoder que busca aprender uma representação compacta dos dados de entrada, também conhecida como codificação latente. A rede é treinada para reconstruir a entrada original a partir da codificação latente, minimizando o erro de reconstrução, é amplamente usado em tarefas de redução de dimensionalidade e denoising (remoção de ruído)" },
      ];
    
      const anomalyDetection = [
        {  key:"12", item: "Isolation Forest", description: "Isolation Forest: Algoritmo de detecção de anomalias baseado em árvores de decisão que isola amostras anômalas em um conjunto de dados. Ele constrói várias árvores de decisão aleatórias, atribuindo valores de score às amostras com base em quantas divisões são necessárias para isolá-las. Amostras com menor score são mais prováveis de serem anômalas, tornando o Isolation Forest eficiente para detecção de outliers em grandes conjuntos de dados." },
        {  key:"13", item: "Local Outlier Factor", description: "Local Outlier Factor (LOF): Algoritmo de detecção de anomalias que avalia o grau de anomalia de cada amostra em relação ao seu entorno local. Ele compara a densidade local de uma amostra com a densidade dos seus vizinhos, atribuindo um fator de anomalia baseado nessa comparação. Amostras com um fator LOF significativamente maior que 1 são consideradas anomalias, permitindo a identificação de pontos de dados que se destacam em relação ao seu contexto local." },
        {  key:"14", item: "Robust Covariance", description: "Robust Covariance : Técnica estatística que estima a matriz de covariância de um conjunto de dados, levando em consideração a presença de outliers e dados com distribuições não normais. Diferente da covariância tradicional, que é sensível a pontos extremos, a covariância robusta é menos afetada por valores atípicos, tornando-a mais adequada para a análise de dados que podem conter observações anômalas ou desvios significativos da normalidade." },
        {  key:"15", item: "One Class SVM", description: "One-Class SVM (Support Vector Machine): Algoritmo de aprendizado de máquina usado para detecção de anomalias em dados não rotulados, onde o objetivo é identificar a classe majoritária ou região normal do conjunto de dados. Ele constrói um hiperplano que circunscreve a maioria dos dados em uma única classe, permitindo que novas amostras que se afastem dessa região sejam identificadas como anomalias." },
      ];

      return (
        <div className="data_analysis_multi_selection">
        <div className="data_analysis_multi_selection_intro">
          <p className="data_analysis_multi_selection_title">Seleção de análises</p>
        </div>
        <div className="data_analysis_multi_selection_container">
          <MultiSelection
            headerText="Analises superficiais"
            imageSrc={superficial_analysis}
            data={analysisData}
            selectedItems={selectedItems.analysisDataSelected}
            onChange={(selectedItems) =>
              handleMultiSelectionChange('analysisDataSelected', selectedItems)
            }
          />
          <MultiSelection
            headerText="Machine Learning"
            imageSrc={machine_learning}
            data={machineLearning}
            selectedItems={selectedItems.machineLearningSelected}
            onChange={(selectedItems) =>
              handleMultiSelectionChange('machineLearningSelected', selectedItems)
            }
          />
          <MultiSelection
            headerText="Detecção de anomalias"
            imageSrc={anomaly_detection}
            data={anomalyDetection}
            selectedItems={selectedItems.anomalyDetectionSelected}
            onChange={(selectedItems) =>
              handleMultiSelectionChange('anomalyDetectionSelected', selectedItems)
            }
          />
        </div>
      </div>
      );
    }
    
    export default DataMultiSelection;