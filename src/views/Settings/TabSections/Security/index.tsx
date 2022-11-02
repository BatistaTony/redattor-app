import { Box, Button } from '@mui/material';
import { FC } from 'react';
import TabPanel from '../utils';
import SecurityForm from './form';

const Security: FC<{ value: number; index: number }> = ({ value, index }) => (
  <TabPanel value={value} index={index}>
    <SecurityForm />
  </TabPanel>
);

export default Security;
