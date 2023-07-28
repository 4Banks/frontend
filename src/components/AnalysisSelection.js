import React from 'react';
import MultiSelection from './MultiSelection';
import '../styles/global.css';
import '../styles/data-analysis-analysis-selection.css'
import superficial_analysis from '../assets/superficial_analysis.svg'
import machine_learning from '../assets/machine_learning.svg'

function AnalysisSelection({ selectedItems, handleMultiSelectionChange }) {

    const analysisData = [
        {  key:"media_moda_mediana",  item: "Média, Mediana e Moda", description: "Média: Valor obtido pela soma de todos os elementos de um conjunto dividido pelo número de elementos presentes. \nMediana: Valor central de um conjunto ordenado, separando-o em duas partes iguais. \nModa: O valor que mais se repete em um conjunto de dados, podendo haver mais de uma moda ou nenhuma." },
        {  key:"desvio_padrao", item: "Desvio Padrão", description: "Desvio Padrão: Medida estatística que indica a dispersão dos valores em relação à média, expressando o quanto os dados se afastam do valor médio do conjunto, fornecendo uma noção da variabilidade dos dados. Quanto maior o desvio padrão, maior a dispersão dos dados em relação à média." },
        {  key:"iqr", item: "Amplitude interquartil (IQR)", description: "Amplitude interquartil: Medida estatística que representa a diferença entre o terceiro quartil (75º percentil) e o primeiro quartil (25º percentil) de um conjunto de dados ordenado. Ela descreve a variação central dos dados, ignorando valores extremos, sendo uma medida mais robusta em relação à presença de outliers." },
        {  key:"analise_basica", item: "Análise básica", description: "Número e porcentagem de dados faltantes e número de campos com o valor zero." },
        {  key:"assimetria", item: "Assimetria", description: "A assimetria das features é uma medida estatística que indica a tendência de distribuição dos dados em relação à média. Se a distribuição é simétrica, a assimetria é próxima de zero; se é assimétrica, pode ser positiva ou negativa. Ela revela a forma e inclinação da distribuição dos dados, fornecendo insights valiosos para análise e interpretação dos mesmos." },
        {  key:"curtose", item: "Curtose", description: "Curtose é uma medida estatística que indica o achatamento e a forma da distribuição dos dados em relação à média. Valores maiores indicam maior concentração dos dados em torno da média e caudas mais pesadas, enquanto valores menores sugerem maior dispersão dos dados e caudas mais leves. A curtose é importante para entender a variabilidade e a presença de outliers em um conjunto de dados, auxiliando na análise dos padrões estatísticos." },
        {  key:"intervalo_valores", item: "Intervalo de valores", description: "O intervalo de valores é a diferença entre o maior e o menor valor em um conjunto de dados. Essa medida simples de dispersão oferece uma visão básica da variação dos dados, mas pode ser afetada por valores extremos." },
        {  key:"max_min", item: "Máximos e mínimos", description: "O valor máximo é o maior número encontrado no conjunto de dados, enquanto o valor mínimo é o menor. Essas medidas indicam a amplitude dos valores e a variabilidade dos dados. Um amplo intervalo sugere maior dispersão, e um intervalo estreito indica maior concentração em torno da média." },
      ];
    
      const machineLearning = [
        {  key:"ml_logistic_regression", item: "Regressão Logística", description: "Regressão Logística: Modelo de aprendizado de máquina para classificação, que prevê a probabilidade de pertencer a uma classe e é comumente usado para problemas binários ou multiclasse." },
        {  key:"ml_decision_tree", item: "Árvore de decisão", description: "Árvore de decisão: Algoritmo de aprendizado de máquina que usa uma estrutura em forma de árvore para tomar decisões sequenciais, dividindo os dados em subconjuntos até encontrar as melhores opções para classificação ou regressão, sendo valorizado por sua interpretabilidade e eficácia." },
        {  key:"ml_random_forest", item: "Random forest", description: "Random Forest: Algoritmo de aprendizado de máquina que constrói várias árvores de decisão durante o treinamento e, posteriormente, faz a predição combinando as respostas das árvores individuais. Essa técnica reduz o overfitting e aumenta a precisão geral, tornando-a amplamente utilizada em problemas de classificação e regressão." },
        {  key:"ml_xgboost", item: "XGBoost", description: "XGBoost (Extreme Gradient Boosting): É um algoritmo de aprendizado de máquina baseado em boosting que utiliza árvores de decisão como base para construir um modelo preditivo mais preciso. Ele otimiza a função de perda usando gradient boosting, combinando as previsões de várias árvores para melhorar a performance e eficiência em problemas de classificação, regressão e ranking. " },
        {  key:"ml_lightgbm", item: "LightGBM", description: "" },
        {  key:"ml_mlp", item: "MLP", description: "" },
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

        </div>
      </div>
      );
    }
    
    export default AnalysisSelection;