import { FC } from 'react';
import { TextField, TextFieldProps, useTheme } from '@mui/material';

const CustomField: FC<TextFieldProps> = props => {
  const { palette } = useTheme();

  const { colors } = palette;

  return <TextField size="medium" {...props} />;
};

export default CustomField;
