import React from 'react';
import "../styles/global.css";
import Popover from '@mui/material/Popover';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import '../styles/selection-label.css'
import "../styles/global.css";


function SelectionLabel({item, description}) {
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
        control={<Checkbox />}
        label={
          <React.Fragment>
            <div className="checkbox_item_container">
            <p className='checkbox_item_title'>{item}</p>
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

export default SelectionLabel;