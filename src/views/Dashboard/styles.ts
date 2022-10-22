import styled from '@emotion/styled';

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
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
      background-color: pink;
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

    .chart-container {
      height: 100%;
      background: pink;
    }

    .card-statcs {
      height: 100%;
      background: yellow;
      background: pink;
    }
  }
`;

export const ContainerDebugg = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;
