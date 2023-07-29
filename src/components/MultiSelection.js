import React from 'react';
import { FormGroup } from '@mui/material';
import '../styles/global.css';
import '../styles/multi-selection.css';
import SelectionLabel from './SelectionLabel';
import Checkbox from '@mui/material/Checkbox';

function MultiSelection({ headerText, imageSrc = "", data = [], selectedItems = [], onChange, height = 600, width = 375 }) {
  const handleSelection = (itemKey) => {
    const newSelectedItems = selectedItems.includes(itemKey)
      ? selectedItems.filter((key) => key !== itemKey)
      : [...selectedItems, itemKey];

    onChange(newSelectedItems);
  };

  const columnCount = 2;

  const itemsPerColumn = Math.ceil(data.length / columnCount);

  const columns = [];
  for (let i = 0; i < columnCount; i++) {
    const startIndex = i * itemsPerColumn;
    const endIndex = startIndex + itemsPerColumn;
    columns.push(data.slice(startIndex, endIndex));
  }

  return (
    <div className={`multi_selection_container ${!imageSrc && 'no-image'}`}>
      <div className={`multi_selection_header ${!imageSrc && 'no-image-header'}`}>
        <p className='multi_selection_header_text'>{headerText}</p>
        {imageSrc && <img src={imageSrc} alt="multi_selection" />}
      </div>
      <div className={`multi_selection_body ${!imageSrc ? 'no-image-body' : columns.length > 1 ? 'two-columns' : ''}`}>
        {columns.map((columnData, columnIndex) => (
          <FormGroup key={columnIndex}>
            {columnData.map((item, index) => (
              <SelectionLabel
                key={item.key}
                value={item.key}
                description={item.description}
                selectionComponent={
                  <Checkbox
                    checked={selectedItems.includes(item.key)}
                    onChange={() => handleSelection(item.key)}
                  />
                }
                isSelected={selectedItems.includes(item.key)}
                itemText={item.item}
              />
            ))}
          </FormGroup>
        ))}
      </div>
    </div>
  );
}



export default MultiSelection;