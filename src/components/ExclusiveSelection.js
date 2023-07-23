import React from 'react';
import { RadioGroup, FormControl } from '@mui/material';
import '../styles/global.css';
import '../styles/exclusive-selection.css';
import SelectionLabel from './SelectionLabel';
import Radio from '@mui/material/Radio';

function ExclusiveSelection({ headerText, data, selectedValue, onChange }) {
  const handleRadioChange = (event) => {
    const selectedKey = event.target.value;
    const selectedItem = data.find((item) => item.key === selectedKey);
    onChange(selectedItem);
  };

  return (
    <div className='exclusive_selection_container'>
      <div className="exclusive_selection_header">
        <p className='exclusive_selection_header_text'>{headerText}</p>
      </div>
      <div className="exclusive_selection_body">
        <FormControl component="fieldset">
          <RadioGroup value={selectedValue ? selectedValue.key : ''} onChange={handleRadioChange}>
            {data.map((item) => (
              <SelectionLabel
                key={item.key}
                value={item.key}
                description={item.description}
                selectionComponent={<Radio />}
                isSelected={selectedValue ? selectedValue.key === item.key : false}
                itemText={item.item} 
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}





export default ExclusiveSelection;



