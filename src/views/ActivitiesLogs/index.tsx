import TitleSection from '@components/molecules/TitleSection';
import { FC, useState, SyntheticEvent } from 'react';
import { Box, Tab, Tabs, useTheme } from '@mui/material';
import {
  Person2Outlined,
  PeopleAlt,
  HowToReg,
  AccountCircle,
  AccessTime,
  Diversity1Outlined,
} from '@mui/icons-material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import { ActivitiesLogsContainter } from './styles';

const StepLabelIcon = () => (
  <div className="step-item-icon">
    <CheckIcon fontSize={'14' as any} color="action" />
  </div>
);

interface ActivitiesLogsProps {
  title: string;
}

interface LogsType {
  changeName: string;
  user: string;
  date: string | Date;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabData = ['Admins', 'Validadores', 'Colunistas'];

interface IconsType {
  Admins: JSX.Element;
  Validadores: JSX.Element;
  Colunistas: JSX.Element;
}

const chooseIcon = (value: string) => {
  const icons: IconsType = {
    Admins: <PeopleAlt />,
    Validadores: <HowToReg />,
    Colunistas: <Person2Outlined />,
  };

  return icons[value as keyof IconsType];
};

const dataExamples: LogsType[] = [
  {
    changeName: 'Nome',
    date: '20/12/2020 - 10:20:20',
    user: 'Jose Tony',
  },
  {
    changeName: 'Coluna 123435454XXC-3',
    date: '20/12/2020 - 10:20:20',
    user: 'Joao Tone',
  },
  {
    changeName: 'Projecto XXXX24378343',
    date: '20/12/2020 - 10:20:20',
    user: 'Ray Tone',
  },
  {
    changeName: 'Nome',
    date: '20/12/2020 - 10:20:20',
    user: 'Batista Tone',
  },
  {
    changeName: 'Password',
    date: '20/12/2020 - 10:20:20',
    user: 'Caio Oliveirs',
  },
  {
    changeName: 'Status',
    date: '20/12/2020 - 10:20:20',
    user: 'Batista Oliveirs',
  },
  {
    changeName: 'Documento XXXXXXX',
    date: '20/12/2020 - 10:20:20',
    user: 'Batista Oliveirs',
  },
];

const ActivitiesLogs = ({ title }: ActivitiesLogsProps) => {
  const [value, setValue] = useState(0);

  const { palette } = useTheme();

  const { colors } = palette;

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  console.log(title);

  return (
    <ActivitiesLogsContainter>
      <TitleSection
        title="Registro de Actividades"
        description="Monitore as alterações feitas em cada informação"
      />
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
                icon={chooseIcon(item)}
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

          <Box style={{ width: '100%', margin: '40px auto 0' }}>
            <Stepper
              activeStep={0}
              orientation="vertical"
              style={{ width: '100%' }}
            >
              {dataExamples.map((log: LogsType) => (
                <Step key={log.changeName} active>
                  <StepLabel
                    className="step-label"
                    StepIconComponent={StepLabelIcon}
                  >
                    <Typography className="text-label" variant="body1">
                      Alteração dos campos:
                    </Typography>
                    <Typography
                      className="text-label text-value"
                      variant="body1"
                    >
                      {log.changeName}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Box className="step-content">
                      <Box className="text-user-chg">
                        <AccountCircle fontSize={'14' as any} color="action" />
                        Por: {log.user}
                      </Box>

                      <Box className="text-user-chg">
                        <>
                          <AccessTime fontSize={'14' as any} color="action" />
                          {log.date}
                        </>
                      </Box>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
      </Box>
    </ActivitiesLogsContainter>
  );
};

export default ActivitiesLogs;
