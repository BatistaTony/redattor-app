import { FC } from 'react';
import { Box, useTheme } from '@mui/material';
import CustomField from '../customTextField';

const PersonalInfoForm: FC = () => {
  const { palette } = useTheme();

  const { colors } = palette;

  return (
    <Box
      component="form"
      display="grid"
      style={{ gridTemplateColumns: '1fr 1fr', gap: '30px' }}
      noValidate
      autoComplete="off"
    >
      <CustomField style={{ width: '100%' }} label="Nome" />
      <CustomField style={{ width: '100%' }} label="Sobrenome" />

      <CustomField style={{ width: '100%' }} label="Email" />
      <CustomField style={{ width: '100%' }} label="Telefone" />

      <CustomField style={{ width: '100%' }} label="Perfil" />
      <CustomField style={{ width: '100%' }} label="Estado" />
    </Box>
  );
};

export default PersonalInfoForm;
