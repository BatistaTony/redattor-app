import { FC } from 'react';
import {
  TextField,
  TextFieldProps,
  useTheme,
  Autocomplete,
  AutocompleteProps,
  Skeleton,
} from '@mui/material';

const CustomAutocomplete: FC<
  TextFieldProps & { options: any; isLoading: boolean }
> = ({ options, isLoading, value, ...props }) => {
  const { palette } = useTheme();

  const { colors } = palette;

  if (isLoading) {
    return <Skeleton variant="rectangular" width="100%" height={55} />;
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      value={value}
      options={options}
      sx={{ width: '100%' }}
      renderInput={params => <TextField {...params} label={props.label} />}
    />
  );
};

export default CustomAutocomplete;
