import { FC, useState, SyntheticEvent, useEffect } from 'react';
import { Box, Tab, Tabs, useTheme } from '@mui/material';

import {
  AdminPanelSettingsOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import { getUserInfo } from '@services/user/getUserInfo';
import { IUser } from 'typescript/user.type';
import { DataToShow, UpdateUserForm } from './types';

import { TabsContent } from './TabSections';
import AvatarSection from './AvatarSection';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabData = ['Informações pessoais', 'Segurança'];

const CustomTabs: FC = () => {
  const [userData, setUserData] = useState<IUser>();
  const [value, setValue] = useState(0);
  const { palette } = useTheme();

  const { colors } = palette;

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    (async () => {
      const { data } = await getUserInfo();

      setUserData(data as any);
    })();
  }, []);

  console.log('aqui', userData);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100% - 103px)',
        backgroundColor: colors.white,
        borderRadius: '6px 6px 0 0',
        padding: '30px',
        marginTop: '50px',
      }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ borderBottom: 2, borderColor: colors.Light3 }}
          TabIndicatorProps={{
            style: {
              backgroundColor: colors.purpleDark,
              color: colors.purpleDark,
            },
          }}
        >
          {tabData.map((item, index) => (
            <Tab
              iconPosition="start"
              icon={
                index === 0 ? (
                  <AccountCircleOutlined />
                ) : (
                  <AdminPanelSettingsOutlined />
                )
              }
              style={{
                textTransform: 'capitalize',
                color: index === value ? colors.purpleDark : colors.gray4,
              }}
              key={item}
              label={item}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>

        <Box style={{ width: '80%', margin: '40px auto 0' }}>
          <AvatarSection
            userHole={userData?.userType}
            fullName={userData?.fullname}
          />

          <TabsContent
            value={value}
            inCommingData={DataToShow(userData) as any}
          />
        </Box>
      </Box>
      {}
    </Box>
  );
};

export default CustomTabs;
