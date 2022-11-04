import React, { FC, useState } from 'react';
import Head from 'next/head';
import DahsboardCardWelcome from '@components/molecules/DashboardCardWelcome';
import { Typography } from '@mui/material';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import ContentPasteGoRoundedIcon from '@mui/icons-material/ContentPasteGoRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CustomChartBar from '@components/molecules/CustomChartBar';
import ColumnChart from '@components/molecules/ColumnChart';
import { CHART_OPTIONS } from '@constants/chart';
import { CardEstatistic } from './CardEstatisticDashboard/CardEstatisticDashboard';
import { DashboardContainer, CardEstatisctIcon } from './styles';
import { data } from './example-data';

const Dashboard: FC<{ title: string }> = ({ title }) => {
  const [chartColumnOption, setChartColumnOption] =
    useState<typeof CHART_OPTIONS[number]>('Mensal');

  return (
    <DashboardContainer>
      <Head>
        <title>{title} | E-Redator</title>
      </Head>

      <div className="dash-b">
        <div className="exp-dt-wlc">
          <DahsboardCardWelcome />
        </div>

        <div className="wlc-cards-statcs">
          <CardEstatistic
            data={<Typography variant="h1">1050</Typography>}
            text="Média de palavras escritas por dia"
          />
          <CardEstatistic
            data={<Typography variant="h1">1050</Typography>}
            text="Média de palavras escritas por projeto"
          />
        </div>
      </div>

      <div className="cards-container">
        <CardEstatistic
          data={
            <CardEstatisctIcon bg="#E7E7FE">
              <div className="div-bg" style={{ opacity: 1 }} />
              <ContentPasteRoundedIcon sx={{ color: '#6A6CF6' }} />
            </CardEstatisctIcon>
          }
          title="5"
          legend="Projetos criados"
        />
        <CardEstatistic
          data={
            <CardEstatisctIcon bg="#ED9E5A">
              <div className="div-bg" />
              <ContentPasteGoRoundedIcon sx={{ color: '#ED9E5A' }} />
            </CardEstatisctIcon>
          }
          title="5"
          legend="Projetos em progresso"
        />
        <CardEstatistic
          data={
            <CardEstatisctIcon bg="#63CDA8">
              <div className="div-bg" />
              <InventoryRoundedIcon sx={{ color: '#63CDA8' }} />
            </CardEstatisctIcon>
          }
          title="5 hrs"
          legend="Projetos concluidos"
        />
        <CardEstatistic
          data={
            <CardEstatisctIcon bg="#FEC000">
              <div className="div-bg" />
              <ScheduleRoundedIcon sx={{ color: '#FEC000' }} />
            </CardEstatisctIcon>
          }
          title="5"
          legend="Horas trabalhadas"
        />
      </div>

      <div className="statcs-chart-container">
        <div className="chart-container">
          <ColumnChart
            chartOption={chartColumnOption}
            handleOptionSelect={(option: typeof CHART_OPTIONS[number]) =>
              setChartColumnOption(option)
            }
          />
        </div>

        <div className="card-statcs">
          <CardEstatistic
            data={
              <CardEstatisctIcon bg="#4684F7">
                <div className="div-bg" />
                <PeopleAltOutlinedIcon sx={{ color: '#4684F7' }} />
              </CardEstatisctIcon>
            }
            title="500"
            legend="Total de Utilizadores"
          />

          <div className="ctr-card">
            <CardEstatistic
              data={<Typography variant="h1">50</Typography>}
              text="Administradores"
            />
          </div>
          <div className="ctr-card">
            <CardEstatistic
              data={<Typography variant="h1">50</Typography>}
              text="Validadores"
            />
          </div>
          <div className="ctr-card">
            <CardEstatistic
              data={<Typography variant="h1">50</Typography>}
              text="Colunistas"
            />
          </div>

          <div className="chart-bar-date">
            <CustomChartBar data={data} />
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
