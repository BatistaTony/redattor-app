import { FC } from 'react';
import { Button, Box } from '@mui/material';
import TabPanel from '../utils';
import PersonalInfoForm from './form';

const PersonalInfo: FC<{ value: number; index: number }> = ({
  value,
  index,
}) => (
  <TabPanel value={value} index={index}>
    <PersonalInfoForm />

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

export default PersonalInfo;
