import { FormControl, FormControlLabel } from '@mui/material';
import MuiSwitch from '@mui/material/Switch';
import { Controller } from 'react-hook-form';
import { useId } from 'react';
import PropTypes from 'prop-types';

export const Switch = ({
  control,
  defaultChecked = false,
  name,
  labelText = '',
  ...rest
}) => {
  const labelId = useId();

  return (
    <FormControl fullWidth>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <FormControlLabel
            control={
              <MuiSwitch
                defaultChecked={defaultChecked}
                onBlur={onBlur}
                onChange={onChange}
                inputRef={ref}
                value={value || ''}
                name={name}
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
