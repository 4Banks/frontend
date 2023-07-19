import React from 'react';
import finance_home from '../../assets/finance_home.jpg';
import "../../styles/global.css";
import "../../styles/data-analysis.css";
import CsvUpload from '../../components/CsvUpload';
import MultiSelection from '../../components/MultiSelection';
import superficial_analysis from '../../assets/superficial_analysis.svg'
import anomaly_detection from '../../assets/anomaly_detection.svg'
import machine_learning from '../../assets/machine_learning.svg'

function DataAnalysis() {
  const analysisData = [
    { item: "Média, Mediana e Moda", description: "Média: Valor obtido pela soma de todos os elementos de um conjunto dividido pelo número de elementos presentes. \nMediana: Valor central de um conjunto ordenado, separando-o em duas partes iguais. \nModa: O valor que mais se repete em um conjunto de dados, podendo haver mais de uma moda ou nenhuma." },
    { item: "Desvio Padrão", description: "Desvio Padrão: Medida estatística que indica a dispersão dos valores em relação à média, expressando o quanto os dados se afastam do valor médio do conjunto, fornecendo uma noção da variabilidade dos dados. Quanto maior o desvio padrão, maior a dispersão dos dados em relação à média." },
    { item: "Amplitude interquartil", description: "Amplitude interquartil: Medida estatística que representa a diferença entre o terceiro quartil (75º percentil) e o primeiro quartil (25º percentil) de um conjunto de dados ordenado. Ela descreve a variação central dos dados, ignorando valores extremos, sendo uma medida mais robusta em relação à presença de outliers." },
    { item: "Análise básica", description: "Número e porcentagem de dados faltantes, zeros, valor máximo e mínimo de cada feature." },
  ];

  const machineLearning = [
    { item: "Regressão Logística", description: "Regressão Logística: Modelo de aprendizado de máquina para classificação, que prevê a probabilidade de pertencer a uma classe e é comumente usado para problemas binários ou multiclasse." },
    { item: "Árvore de decisão", description: "Árvore de decisão: Algoritmo de aprendizado de máquina que usa uma estrutura em forma de árvore para tomar decisões sequenciais, dividindo os dados em subconjuntos até encontrar as melhores opções para classificação ou regressão, sendo valorizado por sua interpretabilidade e eficácia." },
    { item: "Random forest", description: "Random Forest: Algoritmo de aprendizado de máquina que constrói várias árvores de decisão durante o treinamento e, posteriormente, faz a predição combinando as respostas das árvores individuais. Essa técnica reduz o overfitting e aumenta a precisão geral, tornando-a amplamente utilizada em problemas de classificação e regressão." },
    { item: "XGBoost", description: "XGBoost (Extreme Gradient Boosting): É um algoritmo de aprendizado de máquina baseado em boosting que utiliza árvores de decisão como base para construir um modelo preditivo mais preciso. Ele otimiza a função de perda usando gradient boosting, combinando as previsões de várias árvores para melhorar a performance e eficiência em problemas de classificação, regressão e ranking. " },
    { item: "SVM", description: "SVM (Support Vector Machine): Algoritmo de aprendizado de máquina supervisionado usado para resolver problemas de classificação e regressão. Ele busca encontrar o hiperplano que melhor separa os dados de diferentes classes no espaço de características, maximizando a margem entre as classes, sendo eficaz em lidar com dados de alta dimensionalidade." },
    { item: "AutoEncoder", description: "Autoencoder: Rede neural do tipo encoder-decoder que busca aprender uma representação compacta dos dados de entrada, também conhecida como codificação latente. A rede é treinada para reconstruir a entrada original a partir da codificação latente, minimizando o erro de reconstrução, é amplamente usado em tarefas de redução de dimensionalidade e denoising (remoção de ruído)" },
  ];

  const anomalyDetection = [
    { item: "Isolation Forest", description: "Isolation Forest: Algoritmo de detecção de anomalias baseado em árvores de decisão que isola amostras anômalas em um conjunto de dados. Ele constrói várias árvores de decisão aleatórias, atribuindo valores de score às amostras com base em quantas divisões são necessárias para isolá-las. Amostras com menor score são mais prováveis de serem anômalas, tornando o Isolation Forest eficiente para detecção de outliers em grandes conjuntos de dados." },
    { item: "Local Outlier Factor", description: "Local Outlier Factor (LOF): Algoritmo de detecção de anomalias que avalia o grau de anomalia de cada amostra em relação ao seu entorno local. Ele compara a densidade local de uma amostra com a densidade dos seus vizinhos, atribuindo um fator de anomalia baseado nessa comparação. Amostras com um fator LOF significativamente maior que 1 são consideradas anomalias, permitindo a identificação de pontos de dados que se destacam em relação ao seu contexto local." },
    { item: "Robust Covariance", description: "Robust Covariance : Técnica estatística que estima a matriz de covariância de um conjunto de dados, levando em consideração a presença de outliers e dados com distribuições não normais. Diferente da covariância tradicional, que é sensível a pontos extremos, a covariância robusta é menos afetada por valores atípicos, tornando-a mais adequada para a análise de dados que podem conter observações anômalas ou desvios significativos da normalidade." },
    { item: "One Class SVM", description: "One-Class SVM (Support Vector Machine): Algoritmo de aprendizado de máquina usado para detecção de anomalias em dados não rotulados, onde o objetivo é identificar a classe majoritária ou região normal do conjunto de dados. Ele constrói um hiperplano que circunscreve a maioria dos dados em uma única classe, permitindo que novas amostras que se afastem dessa região sejam identificadas como anomalias." },
  ];


  return (
    <div>
      <div className="data_analysis">
        <div className="data_analysis_intro">
            <div className="data_analysis_intro_info">
              <h1 className="title_home">4banks</h1> 
              <p className='data_analysis_intro_info_text'>Descubra um mundo de possibilidades com o 4banks, nossa plataforma de análise de dados voltada para cientistas de dados do time de análise e detecção de fraudes em instituições financeiras. Com nossas ferramentas, você poderá explorar seus dados de transações bancárias de cartão de crédito e obter análises detalhadas, desde insights de alto nível até informações específicas. Nossa metodologia avançada facilita a tomada de decisões estratégicas, permitindo que você identifique padrões suspeitos e detecte atividades fraudulentas com precisão. Experimente agora e transforme seus dados em insights valiosos para proteger seus clientes e impulsionar a segurança financeira da sua instituição.</p>
              <CsvUpload/>
            </div>
            <div className="data_analysis_intro_info_image_container">
              <img src={finance_home} alt="finance_home" className='data_analysis_intro_info_image'/>
            </div>
          </div>
        <div className="data_analysis_multi_selection_intro">
        <p className="data_analysis_multi_selection_title">Seleção de análises</p>
        </div>
          <div className="data_analysis_multi_selection_container">
            <MultiSelection
              headerText="Analises superficiais"
              imageSrc={superficial_analysis}
              data={analysisData}
            />
            <MultiSelection
              headerText="Machine Learning"
              imageSrc={machine_learning}
              data={machineLearning}
            />
            <MultiSelection
              headerText="Detecção de anomalias"
              imageSrc={anomaly_detection}
              data={anomalyDetection}
            />
          </div>
      </div>
    </div>
  );
}

export default DataAnalysis;
