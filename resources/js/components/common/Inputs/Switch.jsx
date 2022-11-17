import { FormControl, FormControlLabel } from '@mui/material';
import MuiSwitch from '@mui/material/Switch';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

export const Switch = ({
  control,
  defaultChecked = false,
  name,
  labelText = '',
  fullWidth = true,
  ...rest
}) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultChecked}
        render={({ field }) => (
          <FormControlLabel
            control={
              <MuiSwitch
                ref={field.ref}
                onChange={e => field.onChange(e.target.checked)}
                checked={field.value || false}
                name={name}
                value={field.value || false}
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
  fullWidth: PropTypes.bool,
};
