import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '@mui/material';
import '../styles/multi-selection.css'
import SelectionLabel from './SelectionLabel';
import Checkbox from '@mui/material/Checkbox';


function MultiSelection({ headerText, imageSrc, data }) {
  return (
    <div className='multi_selection_container'>
      <div className="multi_selection_header">
        <p className='multi_selection_header_text'>{headerText}</p>
        <img src={imageSrc} alt="multi_selection"/>
      </div>
      <div className="multi_selection_body">
        <FormGroup>
          {data.map((item) => (
            <SelectionLabel key={item.item} item={item.item} description={item.description} selectionComponent={<Checkbox />} />
          ))}
        </FormGroup>
      </div>
    </div>
  );
}

MultiSelection.propTypes = {
  headerText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MultiSelection;
