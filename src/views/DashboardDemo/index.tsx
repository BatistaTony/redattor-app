import React, { FC } from 'react';

const DashboardDemo: FC<{ title: string }> = ({ title }) => (
  <div>
    <h1 style={{ color: 'gray' }}>Previw da página {title}</h1>
  </div>
);

export default DashboardDemo;
