import styled from '@emotion/styled';

export const DashboardContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 175px 100px auto;
  grid-gap: 20px;
  padding-top: 24px;
  box-sizing: border-box;

  .dash-b {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 74% 23%;
    grid-template-rows: 100%;
    grid-column-gap: 3%;
    box-sizing: border-box;

    .exp-dt-wlc {
      width: 100%;
      height: 100%;
    }

    .wlc-cards-statcs {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      display: grid;
      grid-template-rows: 47% 47%;
      grid-template-columns: 100%;
      justify-content: space-between;
      grid-gap: 6%;
    }
  }

  .cards-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 23%);
    grid-template-rows: 100%;
    justify-content: space-between;

    .card {
      width: 100%;
      height: 100%;
      background: blue;
    }
  }

  .statcs-chart-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 74% 23%;
    grid-template-rows: 100%;
    grid-column-gap: 3%;
    box-sizing: border-box;
    padding-bottom: 50px;

    .chart-container {
      height: 100%;
      background: #fff;
      border-radius: 6px;
      overflow: hidden;
    }

    .card-statcs {
      height: 100%;
      display: grid;
      grid-template-rows: 96px repeat(3, 52px);
      background: #fff;
      border-radius: 6px;

      .card-estatistic-container {
        border-radius: 0;
        background: #fff;
        border-bottom: 1px solid #e7e7fe;
      }

      .ctr-card {
        .data-item {
          width: 32px;
          height: 32px;
          background: rgba(70, 132, 247, 0.2);

          h1 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #4684f7;
          }
        }
        .card-content {
          .text-data {
            color: #7a7d82;
          }
        }
      }
    }

    .chart-bar-date {
      width: 100%;
      height: 100%;
      padding: 20px 13px;
    }
  }
`;

export const ContainerDebugg = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;

interface CardEstatisctIconProps {
  bg: string;
}

export const CardEstatisctIcon = styled.div<CardEstatisctIconProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  .div-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ bg }) => bg || 'rgba(255, 255, 255, 0.2)'};
    opacity: 0.2;
    z-index: 1;
  }

  svg {
    z-index: 2;
  }
`;
