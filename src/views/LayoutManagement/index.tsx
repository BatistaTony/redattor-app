import TitleSection from '@components/molecules/TitleSection';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import { PaperAdd } from 'assets/icons';
import ListOfLayouts from './listOfLayouts';
import fakeData from './fakeData';

const LayoutManagement: FC = () => {
  const theme = useTheme();

  const { palette } = theme;
  const { colors } = palette;

  return (
    <Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <TitleSection
          title="Layouts de Páginas"
          description="Gerencie a estrutura das suas páginas"
        />

        <Button
          variant="contained"
          disableElevation
          style={{ backgroundColor: colors.purpleDark, padding: '0 20px' }}
          endIcon={<PaperAdd />}
        >
          Criar Novo layout
        </Button>
      </Box>

      <Typography
        color={colors.gray2}
        variant="body1"
        fontSize={14}
        style={{ marginTop: 40, marginBottom: 10 }}
      >
        Modelos
      </Typography>

      <ListOfLayouts loading={false} layouts={fakeData} />
    </Box>
  );
};

export default LayoutManagement;
