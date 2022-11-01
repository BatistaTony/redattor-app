/* eslint-disable import/prefer-default-export */
import { FC } from 'react';
import PersonalInfo from './PersonalInfo';
import Security from './Security';

export const TabsContent: FC<{ value: number }> = ({ value }) => (
  <>
    <PersonalInfo value={value} index={0} />
    <Security value={value} index={1} />
  </>
);
