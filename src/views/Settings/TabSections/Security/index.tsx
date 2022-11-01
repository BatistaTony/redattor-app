import { Box, Button } from '@mui/material';
import { FC } from 'react';
import TabPanel from '../utils';
import SecurityForm from './form';

const Security: FC<{ value: number; index: number }> = ({ value, index }) => (
  <TabPanel value={value} index={index}>
    <SecurityForm />

    <Box display="flex" justifyContent="flex-end" marginTop="50px">
      <Button
        variant="contained"
        size="large"
        style={{ alignSelf: 'flex-end' }}
      >
        Guardar alterações
      </Button>
    </Box>
  </TabPanel>
);

export default Security;
