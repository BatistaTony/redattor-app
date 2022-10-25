import { Typography } from '@mui/material';
import { FC } from 'react';
import { CardEstatisticType } from './type';
import { CardEstatisticContainer } from './styles';

const CardEstatistic: FC<CardEstatisticType> = ({
  data,
  legend,
  text,
  title,
}) => (
  <CardEstatisticContainer className="card-estatistic-container">
    <div className="card-bg" />
    <div>
      <div className="data-item">{data}</div>
    </div>
    <div className="card-content">
      {!!text && (
        <Typography variant="body2" className="text-data card-text-bd2">
          {text}
        </Typography>
      )}
      {!!title && (
        <>
          <h1 className="card-title">{title}</h1>
          <h5 className="card-legend">{legend}</h5>
        </>
      )}
    </div>
  </CardEstatisticContainer>
);

export default CardEstatistic;
