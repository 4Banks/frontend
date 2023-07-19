import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Popover } from '@mui/material';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import '../styles/selection-label.css';
import '../styles/global.css';

function SelectionLabel({ value, description, selectionComponent }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className='checkbox_item'>
      <FormControlLabel
        control={React.cloneElement(selectionComponent, { value })}
        label={
          <React.Fragment>
            <div className="checkbox_item_container">
              <p className='checkbox_item_title'>{value}</p>
              <HelpRoundedIcon
                color="primary"
                id="checkbox_item_label_img"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              />
            </div>
          </React.Fragment>
        }
      />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className="popover_container">
          <p>{description}</p>
        </div>
      </Popover>
    </div>
  );
}

SelectionLabel.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selectionComponent: PropTypes.element.isRequired,
};

export default SelectionLabel;
