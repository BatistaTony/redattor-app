import { CHART_OPTIONS } from '@constants/chart';

export interface ColumnChartProps {
  chartOption: typeof CHART_OPTIONS[number];
  handleOptionSelect: (value: typeof CHART_OPTIONS[number]) => void;
  data?: unknown;
}
