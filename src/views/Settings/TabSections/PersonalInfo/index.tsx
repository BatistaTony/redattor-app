/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { FC, useState, useCallback } from 'react';
import { Button, Box } from '@mui/material';
import TabPanel from '../utils';
import PersonalInfoForm from './form';
import { UpdateUserForm } from '../../types';

const PersonalInfo: FC<{
  value: number;
  index: number;
  inCommingData?: UpdateUserForm;
  userId: number;
}> = ({ value, index, inCommingData, userId }) => (
  <TabPanel value={value} index={index}>
    <PersonalInfoForm inCommingData={inCommingData} userId={userId} />
  </TabPanel>
);

export default PersonalInfo;
