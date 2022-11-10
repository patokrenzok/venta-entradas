import MuiIconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

export const BaseIconButton = ({ onClick, tooltipText, icon, ...rest }) => {
  const Icon = icon;

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <Tooltip title={tooltipText || ''}>
      <span>
        <MuiIconButton onClick={handleClick} {...rest}>
          <Icon />
        </MuiIconButton>
      </span>
    </Tooltip>
  );
};

BaseIconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  tooltipText: PropTypes.string,
  icon: PropTypes.object.isRequired,
};
