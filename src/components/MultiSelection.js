import React from 'react';
import { FormGroup } from '@mui/material';
import '../styles/global.css';
import '../styles/multi-selection.css';
import SelectionLabel from './SelectionLabel';
import Checkbox from '@mui/material/Checkbox';

function MultiSelection({ headerText, imageSrc, data = [], selectedItems = [], onChange }) {
  const handleSelection = (itemKey) => {
    const newSelectedItems = selectedItems.includes(itemKey)
      ? selectedItems.filter((key) => key !== itemKey)
      : [...selectedItems, itemKey];

    onChange(newSelectedItems);
  };

  return (
    <div className='multi_selection_container'>
      <div className="multi_selection_header">
        <p className='multi_selection_header_text'>{headerText}</p>
        <img src={imageSrc} alt="multi_selection" />
      </div>
      <div className="multi_selection_body">
        <FormGroup>
          {data.map((item) => (
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
      </div>
    </div>
  );
}

export default MultiSelection;
