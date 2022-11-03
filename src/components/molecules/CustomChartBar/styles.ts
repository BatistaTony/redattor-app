import styled from '@emotion/styled';

export const CustomChartBarContainer = styled.div`
  background: #f5f5f9;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  padding: 20px;
  /* overflow: hidden; */

  .chart-title {
    margin-bottom: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #1e2327;
  }

  .bar {
    width: 100%;
    height: 14px;
    display: grid;
    grid-template-columns: 15% 85%;
    flex-direction: row;
    margin-bottom: 16px;
  }

  .bar-legend {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #7a7d82;
    margin-right: 12px;
  }

  .bar-progress-container {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    overflow: hidden;
  }

  .bar-progress {
    width: 50%;
    height: 100%;
    background: red;
    border-radius: 2px;
  }
`;
