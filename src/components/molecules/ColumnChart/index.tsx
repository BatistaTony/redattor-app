import { CHART_OPTIONS } from '@constants/chart';
import { Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
  ColumnChartContainer,
  ColumnChartOption,
  ColumnChartOptionItem,
} from './styles';
import { ColumnChartProps } from './type';
import { data, options } from './helper';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

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

    <div className="chart-data-container">
      <Bar options={options as unknown as never} data={data} />
    </div>
  </ColumnChartContainer>
);

export default ColumnChart;
