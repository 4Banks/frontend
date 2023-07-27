import React from 'react';
import ExclusiveSelection from './ExclusiveSelection';
import MultiSelection from './MultiSelection';
import '../styles/global.css';
import '../styles/data-analysis-data-processing.css'

function DataProcessing({ selectedKeys,selectedItems,handleExclusiveSelectionChange,handleMultiSelectionChange}) {

  const sampling = [
    { key:"random_over_sampling", item: "Over-sampling", description: "" },
    { key:"random_under_sampling", item: "Under-sampling", description:  "" },
    { key:"bsmote", item: "Borderline SMOTE", description:  "" },
    { key:"smote", item: "SMOTE", description:  "" },
    { key:"adasyn", item: "ADASYN", description: "" },
  ]

  const outlierDetection = [
    { key:"log", item: "log", description:  "" },
    { key:"sqrt", item: "sqrt", description:  "" },
    { key:"cbrt", item: "cbrt", description:  "" },
    { key:"scaling", item: "scaling", description:  "" },
    { key:"constant", item: "constant", description:  "" },
    { key:"remove", item: "remove", description:  "" },
  ]

  const outlierRemoval = [
    { key:"outliers_z_score", item: "Z-score method", description:  "" },
    { key:"outliers_robust_z_score", item: "Robust Z-score", description:  "" },
    { key:"outliers_iqr", item: "I.Q.R method", description: "" },
    { key:"outliers_winsorization", item: "Winsorization method (Percentile Capping)", description:  "" },
  ]


  const emptySetsTreatment = [
    { key:"mean", item: "Média", description:  "" },
    { key:"most_frequent", item: "Moda", description:  "" },
    { key:"median", item: "Mediana", description:  "" },
    { key:"constant", item: "constant?", description:  "" },
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
          headerText="Detecção de outliers"
          data={outlierDetection}
          selectedValue={selectedKeys.outlierTreatmentSelected}
          onChange={(selectedItem) =>
            handleExclusiveSelectionChange('outlierTreatmentSelected', selectedItem)
          }
        />

      <MultiSelection
            headerText="Detecção de anomalias"
            data={outlierRemoval}
            selectedItems={selectedItems.outlierRemovalSelected}
            onChange={(selectedItems) =>
              handleMultiSelectionChange('outlierRemovalSelected', selectedItems)
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