/* eslint-disable import/prefer-default-export */
import { FC } from 'react';
import { UpdateUserForm } from '../types';
import PersonalInfo from './PersonalInfo';
import Security from './Security';

export const TabsContent: FC<{
  value: number;
  inCommingData?: UpdateUserForm;
}> = ({ value, inCommingData }) => (
  <>
    <PersonalInfo value={value} index={0} inCommingData={inCommingData} />
    <Security value={value} index={1} />
  </>
);
