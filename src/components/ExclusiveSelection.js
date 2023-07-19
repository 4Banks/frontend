import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, FormControl } from '@mui/material';

import '../styles/exclusive-selection.css';
import SelectionLabel from './SelectionLabel';
import Radio from '@mui/material/Radio';

function ExclusiveSelection({ headerText, data }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='exclusive_selection_container'>
      <div className="exclusive_selection_header">
        <p className='exclusive_selection_header_text'>{headerText}</p>
      </div>
      <div className="exclusive_selection_body">
        <FormControl component="fieldset">
          <RadioGroup value={selectedValue} onChange={handleRadioChange}>
            {data.map((item) => (
              <SelectionLabel
                key={item.item}
                value={item.item}
                description={item.description}
                selectionComponent={<Radio />}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

ExclusiveSelection.propTypes = {
  headerText: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExclusiveSelection;
