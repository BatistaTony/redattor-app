import { Avatar, Box, Button, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { FlipCameraIos } from '@mui/icons-material';

const AvatarSection: FC = () => {
  const { palette } = useTheme();

  const { colors } = palette;
  return (
    <Box display="flex" alignItems="center" marginBottom="40px">
      <Avatar style={{ width: '97px', height: '97px' }} />
      <Box marginLeft="20px">
        <Typography fontSize={24} fontWeight={700} color={colors.Gray}>
          Joao Tony
        </Typography>
        <Typography fontSize={16} color={colors.gray2}>
          Administrador
        </Typography>
      </Box>

      <Button
        variant="contained"
        disableElevation
        style={{
          backgroundColor: `${colors.gray4}50`,
          padding: '0 20px',
          color: colors.gray2,
          fontSize: 12,
          height: 34,
          marginLeft: 30,
        }}
        startIcon={<FlipCameraIos />}
      >
        Alterar Imagem
      </Button>
    </Box>
  );
};

export default AvatarSection;
