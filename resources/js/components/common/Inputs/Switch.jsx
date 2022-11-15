import { FormControl, FormControlLabel } from '@mui/material';
import MuiSwitch from '@mui/material/Switch';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

export const Switch = ({
  control,
  defaultChecked = false,
  name,
  labelText = '',
  ...rest
}) => {
  return (
    <FormControl fullWidth>
      <Controller
        control={control}
        name={name}
        render={props => (
          <FormControlLabel
            control={
              <MuiSwitch
                defaultChecked={defaultChecked}
                onChange={e => props.field.onChange(e.target.checked)}
                checked={props.field.checked}
                {...rest}
              />
            }
            label={labelText}
          />
        )}
      />
    </FormControl>
  );
};

Switch.propTypes = {
  control: PropTypes.object.isRequired,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
};
