import { CHART_OPTIONS } from '@constants/chart';
import { Typography } from '@mui/material';
import {
  ColumnChartContainer,
  ColumnChartOption,
  ColumnChartOptionItem,
} from './styles';
import { ColumnChartProps } from './type';

const ColumnChart = ({ chartOption, handleOptionSelect }: ColumnChartProps) => (
  <ColumnChartContainer>
    <div className="div-header">
      <Typography className="txt-header">
        Quantidade de palavras escritas por projeto
      </Typography>
      <ColumnChartOption>
        {CHART_OPTIONS.map((option: typeof CHART_OPTIONS[number]) => (
          <ColumnChartOptionItem
            onClick={() => handleOptionSelect(option)}
            active={chartOption === option}
            key={option}
          >
            {option}
          </ColumnChartOptionItem>
        ))}
      </ColumnChartOption>
    </div>

    <div className="chart-data-container" />
  </ColumnChartContainer>
);

export default ColumnChart;
