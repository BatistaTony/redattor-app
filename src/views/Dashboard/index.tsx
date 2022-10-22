import React, { FC, useState } from 'react';
import Head from 'next/head';
import { DashboardContainer, ContainerDebugg } from './styles';

const Dashboard: FC<{ title: string }> = ({ title }) => {
  const [test, setTest] = useState('');

  return (
    <DashboardContainer>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="dash-b">
        <div className="exp-dt-wlc">
          <ContainerDebugg />
        </div>

        <div className="wlc-cards-statcs">
          <ContainerDebugg />
          <ContainerDebugg />
        </div>
      </div>

      <div className="cards-container">
        <ContainerDebugg className="card" />
        <ContainerDebugg className="card" />
        <ContainerDebugg className="card" />
        <ContainerDebugg className="card" />
      </div>

      <div className="statcs-chart-container">
        <div className="chart-container" />

        <div className="card-statcs" />
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
