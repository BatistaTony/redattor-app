/* eslint-disable react/destructuring-assignment */
import { FC } from 'react';
import { Skeleton, TextField, TextFieldProps, useTheme } from '@mui/material';

const CustomField: FC<TextFieldProps & { isLoading: boolean }> = props => {
  const { palette } = useTheme();

  const { colors } = palette;

  if (props.isLoading) {
    return <Skeleton variant="rectangular" width="100%" height={55} />;
  }

  return <TextField size="medium" {...props} />;
};

export default CustomField;
