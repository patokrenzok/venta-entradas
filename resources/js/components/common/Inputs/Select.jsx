import { FormControl, InputLabel, MenuItem } from '@mui/material';
import MuiSelect from '@mui/material/Select';
import { Controller } from 'react-hook-form';
import { useId } from 'react';
import PropTypes from 'prop-types';

export const Select = ({
  control,
  data,
  name,
  labelText = '',
  required = false,
  ...rest
}) => {
  const labelId = useId();

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId} required={required}>
        Rol
      </InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <MuiSelect
            required={required}
            labelId={labelId}
            label={labelText}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={ref}
            value={value || ''}
            name={name}
            {...rest}
          >
            {data.length > 0 &&
              data.map((item, i) => (
                <MenuItem value={item.id} key={item.id} selected={i === 0}>
                  {item.name}
                </MenuItem>
              ))}
          </MuiSelect>
        )}
      />
    </FormControl>
  );
};

Select.propTypes = {
  control: PropTypes.object.isRequired,
  data: PropTypes.array,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
};

Select.defaultProps = {
  data: [],
};
