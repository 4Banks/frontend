import React from 'react';
import ExclusiveSelection from './ExclusiveSelection';
import '../styles/global.css';
import '../styles/data-analysis-exclusive-selection.css'

function DataExclusiveSelection({ selectedKeys, handleExclusiveSelectionChange }) {

  const sampling = [
    { key:"over_sampling", item: "Over-sampling", description: "" },
    { key:"under_sampling", item: "Under-sampling", description:  "" },
    { key:"borderline_smote", item: "Borderline SMOTE", description:  "" },
    { key:"smote", item: "SMOTE", description:  "" },
    { key:"adasyn", item: "ADASYN", description: "" },
  ]

  const outlierTreatment = [
    { key:"z_score", item: "Z-score method", description:  "" },
    { key:"robust_z_score", item: "Robust Z-score", description:  "" },
    { key:"iqe_methord", item: "I.Q.R method", description: "" },
    { key:"winsorization", item: "Winsorization method (Percentile Capping)", description:  "" },
    { key:"dbscan", item: "DBSCAN Clustering", description: "" },
  ]

  const outlierRemoval = [
    { key:"deleting", item: "Deleting observations", description:  "" },
    { key:"transforming",item: "Transforming values", description:  "" },
    { key:"imputation",item: "Imputation", description: "" },
    { key:"separately",item: "Separately treating", description:  "" },
    
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
          selectedValue={selectedKeys.samplingSelected}
          onChange={(selectedItem) =>
            handleExclusiveSelectionChange('samplingSelected', selectedItem)
          }
        />
        <ExclusiveSelection
          headerText="Detecção de outliers"
          data={outlierTreatment}
          selectedValue={selectedKeys.outlierTreatmentSelected}
          onChange={(selectedItem) =>
            handleExclusiveSelectionChange('outlierTreatmentSelected', selectedItem)
          }
        />
        <ExclusiveSelection
          headerText="Tratamento de outliers"
          data={outlierRemoval}
          selectedValue={selectedKeys.outlierRemovalSelected}
          onChange={(selectedItem) =>
            handleExclusiveSelectionChange('outlierRemovalSelected', selectedItem)
          }
        />
      </div>
    </div>
  );
}

export default DataExclusiveSelection;