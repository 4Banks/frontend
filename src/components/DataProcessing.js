import React from 'react';
import ExclusiveSelection from './ExclusiveSelection';
import MultiSelection from './MultiSelection';
import '../styles/global.css';
import '../styles/data-analysis-data-processing.css'

function DataProcessing({ selectedKeys,selectedItems,handleExclusiveSelectionChange,handleMultiSelectionChange}) {

  const sampling = [
    { key:"random_over_sampling", item: "Random Oversampling", description: "Aumenta o número de exemplos da classe minoritária replicando ou gerando novas instâncias, equilibrando a distribuição entre as classes. Embora ajude a melhorar a representatividade da classe minoritária, pode levar ao sobreajuste e aumento da variância do modelo. É importante escolher a abordagem adequada de acordo com o problema específico." },
    { key:"random_under_sampling", item: "Random Undersampling", description:  "Reduz aleatoriamente o número de exemplos da classe majoritária para igualar a classe minoritária. Apesar de simples, pode levar à perda de informações importantes e reduzir a precisão do modelo. Outras técnicas como SMOTE podem ser mais eficazes." },
    { key:"bsmote", item: "Borderline SMOTE", description:  "Borderline SMOTE é uma variação do SMOTE, uma técnica de over sampling para abordar conjuntos de dados desbalanceados. Em vez de gerar instâncias sintéticas de toda a classe minoritária, o Borderline SMOTE se concentra apenas nas instâncias da classe minoritária que estão perto da fronteira de decisão. Isso reduz o risco de criar exemplos sintéticos que estejam muito distantes dos casos reais e melhora a capacidade de generalização do modelo em relação ao SMOTE padrão." },
    { key:"smote", item: "SMOTE", description:  "Técnica de oversampling para tratar conjuntos de dados desbalanceados. Em vez de simplesmente replicar exemplos da classe minoritária, o SMOTE gera instâncias sintéticas interpolando características entre exemplos existentes. Isso ajuda a evitar o sobreajuste e melhora a capacidade de generalização do modelo, tornando-o mais eficaz do que o over sampling tradicional." },
    { key:"adasyn", item: "ADASYN", description: "Técnica de oversampling projetada para lidar com conjuntos de dados desbalanceados. Ela é uma extensão do SMOTE, mas com uma abordagem adaptativa que prioriza a geração de instâncias sintéticas para as regiões de difícil classificação, onde a classe minoritária é mais escassa. Isso ajuda a evitar o sobreajuste, equilibrando o conjunto de dados de forma mais eficiente e melhorando o desempenho do modelo de classificação em relação ao SMOTE tradicional." },
  ]

  const outlierTreatment = [
    { key:"log", item: "Log", description:  "O logaritmo é uma função matemática que pode ser usada para reduzir a variabilidade dos dados. Isso é útil quando você tem dados que são positivos e fortemente inclinados. A transformação logarítmica pode ajudar a reduzir o impacto de outliers, tornando os dados mais parecidos com uma distribuição normal." },
    { key:"sqrt", item: "Raiz quadrada", description:  "Semelhante à transformação logarítmica, a transformação de raiz quadrada pode ser usada para reduzir a variabilidade e o impacto dos outliers nos dados. Este método é frequentemente usado quando os dados têm uma distribuição de cauda pesada. No entanto, a transformação de raiz quadrada só pode ser usada para números positivos." },
    { key:"cbrt", item: "Raiz cúbica", description:  "A transformação de raiz cúbica é outra maneira de reduzir a variabilidade e o impacto dos outliers. Ela é menos drástica que a transformação logarítmica e a de raiz quadrada, mas ainda pode ajudar a tornar os dados mais normalmente distribuídos. A transformação de raiz cúbica pode ser aplicada a números negativos, ao contrário da transformação de raiz quadrada." },
    { key:"scaling", item: "Escalonamento", description:  "Este é um processo de mudança de escala dos dados. Métodos comuns de escalonamento incluem a normalização (escalando os dados para terem uma média de 0 e desvio padrão de 1) e o escalonamento min-max (transformando os dados para estarem no intervalo de 0 a 1). O escalonamento pode ajudar a reduzir o impacto dos outliers, mas não os remove completamente." },
    { key:"constant", item: "Constante", description:  "Este método envolve a substituição de outliers por uma constante. Por exemplo, você pode substituir todos os outliers por um valor como a média ou a mediana dos dados. Embora isso possa ajudar a reduzir o impacto dos outliers, também pode distorcer a distribuição dos dados e perder informações valiosas." },
    { key:"remove", item: "Remoção", description:  "Este é o método mais direto de lidar com outliers: simplesmente removendo-os dos dados. Isso pode ser apropriado se você suspeitar que os outliers são devidos a erros de medição ou outras anomalias. No entanto, se os outliers representarem variações legítimas nos dados, a remoção deles poderá resultar na perda de informações importantes." },
  ]

  const outlierDetection = [
    { key:"outliers_z_score", item: "Z-score method", description:  "Calcula o desvio de cada ponto em relação à média e normaliza pelo desvio padrão. Valores com Z-score superior a 3 ou inferior a -3 são considerados outliers. Entretanto, é importante interpretar os resultados e considerar o contexto dos dados antes de tomar decisões sobre os outliers." },
    { key:"outliers_robust_z_score", item: "Robust Z-score", description:  "É uma variação do Z-score que lida melhor com dados que contêm outliers. Em vez de usar a média e o desvio padrão, o Robust Z-score usa a mediana e o desvio absoluto da mediana (MAD) para calcular o desvio de cada ponto em relação à mediana. Isso torna o método menos sensível a valores atípicos e mais robusto em ambientes com presença de outliers." },
    { key:"outliers_iqr", item: "I.Q.R method", description: "É uma medida estatística usada para detectar e identificar outliers em um conjunto de dados. Ele fornece uma maneira robusta de avaliar a dispersão dos valores em torno da mediana e é menos sensível a valores extremos do que outras medidas, como a média e o desvio padrão." },
    { key:"outliers_winsorization", item: "Winsorization method (Percentile Capping)", description:  "A abordagem do Winsorization consiste em definir um limite superior e/ou inferior para os valores do conjunto de dados, substituindo os outliers que ultrapassam esses limites pelos próprios limites. Isso ajuda a mitigar o impacto desses valores atípicos na análise estatística, tornando os dados mais robustos e realistas." },
  ]


  const emptySetsTreatment = [
    { key:"mean", item: "Média", description:  "O método média para tratamento de dados vazios consiste em substituir os valores ausentes por um valor calculado a partir da média dos dados disponíveis. Isso ajuda a manter a consistência do conjunto de dados e permite a utilização de técnicas estatísticas que requerem dados completos. No entanto, é importante considerar o impacto na análise, pois a substituição pela média pode distorcer a distribuição original dos dados." },
    { key:"most_frequent", item: "Moda", description:  "O método moda para tratamento de dados vazios envolve substituir os valores ausentes pelo valor mais frequente no conjunto de dados disponíveis. Isso é feito para preencher as lacunas e evitar a perda de informações importantes. No entanto, o uso da moda pode não ser adequado para todos os tipos de dados, especialmente aqueles com distribuições contínuas, pois pode não representar adequadamente a tendência central dos dados." },
    { key:"median", item: "Mediana", description:  "O método mediana para tratamento de dados vazios consiste em substituir os valores ausentes pela mediana do conjunto de dados disponíveis. A mediana é o valor que divide o conjunto em duas partes iguais, sendo menos sensível a outliers do que a média. Essa abordagem é útil para manter a tendência central dos dados e evitar distorções causadas por valores extremos, sendo uma alternativa mais robusta em relação ao uso da média." },
    { key:"constant", item: "Constante", description:  "O método constante para tratamento de dados vazios envolve substituir os valores ausentes por um valor constante pré-determinado. Essa abordagem é simples e rápida de aplicar, mas pode levar à perda de informações importantes e introduzir vieses nos dados. É mais adequado quando a presença de valores ausentes não é significativa ou quando não se pode calcular uma estimativa mais precisa dos dados faltantes." },
  ]

  return (
    <div className="data_analysis_exclusive_selection">
      <div className="data_analysis_exclusive_selection_intro">
        <p className="data_analysis_exclusive_selection_title">Processamento dos dados</p>
      </div>
      <div className="data_analysis_exclusive_selection_container">
        <ExclusiveSelection
          headerText="Amostragem do dataset"
          data={sampling}
          selectedValue={selectedKeys.balanceSelected}
          onChange={(selectedItem) =>
            handleExclusiveSelectionChange('balanceSelected', selectedItem)
          }
        />

        <ExclusiveSelection
          headerText="Tratamento de outliers"
          data={outlierTreatment}
          selectedValue={selectedKeys.outlierTreatmentSelected}
          onChange={(selectedItem) =>
            handleExclusiveSelectionChange('outlierTreatmentSelected', selectedItem)
          }
        />

        <MultiSelection
            headerText="Detecção de outliers"
            data={outlierDetection}
            selectedItems={selectedItems.outlierDetectionSelected}
            onChange={(selectedItems) =>
              handleMultiSelectionChange('outlierDetectionSelected', selectedItems)
            }
          />

          <ExclusiveSelection
          headerText="Tratamento de conjuntos vazios"
          data={emptySetsTreatment}
          selectedValue={selectedKeys.emptySetsTreatment}
          onChange={(selectedItem) =>
            handleExclusiveSelectionChange('emptySetsTreatment', selectedItem)
          }
        />
      </div>
    </div>
  );
}

export default DataProcessing;