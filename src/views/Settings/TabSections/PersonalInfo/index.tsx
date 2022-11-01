import { FC, useState, useCallback } from 'react';
import { Button, Box } from '@mui/material';
import TabPanel from '../utils';
import PersonalInfoForm from './form';
import { UpdateUserForm } from '../../types';

const PersonalInfo: FC<{
  value: number;
  index: number;
  inCommingData?: UpdateUserForm;
}> = ({ value, index, inCommingData }) => (
  <TabPanel value={value} index={index}>
    <PersonalInfoForm inCommingData={inCommingData} />
  </TabPanel>
);

export default PersonalInfo;
