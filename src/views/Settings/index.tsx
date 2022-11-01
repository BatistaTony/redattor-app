import TitleSection from '@components/molecules/TitleSection';
import { Box, useTheme } from '@mui/material';
import { FC } from 'react';
import CustomTabs from './tabs';

import { SettingsContainer } from './styles';

const Settings: FC = () => {
  const theme = useTheme();

  const { palette } = theme;

  return (
    <SettingsContainer>
      <TitleSection
        title="Definições"
        description="definições gerais da conta"
      />

      <CustomTabs />
    </SettingsContainer>
  );
};

export default Settings;
