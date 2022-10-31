import React, { FC, useEffect } from 'react';

const DashboardDemo: FC<{ title: string }> = ({ title }) => (
  <div>
    <h1 style={{ color: 'gray' }}>Previw da pow página {title}</h1>
  </div>
);

export default DashboardDemo;
