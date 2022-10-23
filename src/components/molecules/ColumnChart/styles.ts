import styled from '@emotion/styled';

export const ColumnChartContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 32px;

  .div-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .txt-header {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #474c50;
  }
`;

export const ColumnChartOption = styled.div`
  background: #f5f5f9;
  border-radius: 6px;
  width: auto;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding-right: 5px;
  padding-left: 5px;
`;

interface ColumnChartOptionItemProps {
  active: boolean;
}

export const ColumnChartOptionItem = styled.li<ColumnChartOptionItemProps>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${({ active }) => (active ? '#ffffff' : '#474c50')};
  height: 80%;
  width: 87px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${({ active }) => (active ? '#474C50' : 'transparent')};
  cursor: pointer;
  transition: 0.5s;
`;
