import { FC } from 'react';
import { Box, useTheme } from '@mui/material';
import CustomField from '../customTextField';

const SecurityForm: FC = () => {
  const { palette } = useTheme();

  const { colors } = palette;

  return (
    <Box
      component="form"
      display="grid"
      style={{ gridTemplateRows: '1fr 1fr', gap: '30px' }}
      noValidate
      autoComplete="off"
    >
      <CustomField style={{ width: '100%' }} label="Senha antiga" />

      <Box style={{ width: '100%' }}>
        <CustomField
          style={{ width: 'calc(50% - 15px)', marginRight: '30px' }}
          label="Nova senha"
        />
        <CustomField
          style={{ width: 'calc(50% - 15px)' }}
          label="Confirmar senha"
        />
      </Box>
    </Box>
  );
};

export default SecurityForm;
