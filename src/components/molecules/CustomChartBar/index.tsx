import { Typography } from '@mui/material';
import { BarChartDataType } from 'typescript/bar-chart';
import { getBarColorByPercentage } from './helper';
import { CustomChartBarContainer } from './styles';
import { CustomChartBarProps } from './type';

const CustomChartBar = ({ data }: CustomChartBarProps) => (
  <CustomChartBarContainer>
    <Typography variant="h1" className="chart-title">
      Projetos concluídos no semestre
    </Typography>
    {data.map((barData: BarChartDataType) => (
      <div className="bar" key={barData.month}>
        <Typography className="bar-legend">{barData.month}</Typography>
        <div className="bar-progress-container">
          <div
            className="bar-progress"
            style={{
              width: `${barData.percentage}%`,
              backgroundColor: `${getBarColorByPercentage(barData.percentage)}`,
            }}
          />
        </div>
      </div>
    ))}
  </CustomChartBarContainer>
);

export default CustomChartBar;
