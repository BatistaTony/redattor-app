import styled from '@emotion/styled';

export const CardEstatisticContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: blue;
  box-shadow: 0px 0px 4px -13px rgba(0, 0, 0, 0.05);
  border-radius: 6px;

  .data-item {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    width: 52px;
    max-width: auto;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 26px;
  }

  .card-content {
    height: 44px;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .text-data {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 16px;
      color: #ffffff;
      width: 80%;
    }

    .card-title {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color: #1e2327;
    }

    .card-legend {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #7a7d82;
    }
  }
`;
