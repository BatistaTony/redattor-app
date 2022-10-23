import styled from '@emotion/styled';

export const CardEstatisticContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 0px 4px -13px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  background: #4684f7;

  .data-item {
    border-radius: 6px;
    width: 60px;
    max-width: auto;
    height: 50px;
    margin-right: 26px;
    overflow: hidden;

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: #ffffff;
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .card-content {
    display: flex;
    height: 50px;
    flex-direction: column;
    height: auto;

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
      line-height: 150%;
      margin: 0;
      padding: 0;
    }

    .card-legend {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #7a7d82;
      line-height: 150%;
      margin: 0;
      padding: 0;
    }
  }
`;
