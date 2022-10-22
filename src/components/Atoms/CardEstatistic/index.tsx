import { Typography } from '@mui/material';
import { FC } from 'react';
import { CardEstatisticType } from './type';
import { CardEstatisticContainer } from './styles';

const CardEstatistic = () => {
  const t = 0;
  return (
    <CardEstatisticContainer>
      <div>
        <div className="data-item">15</div>
      </div>
      <div className="card-content">
        {/* <Typography variant="body1" className="text-data">
          Média de palavras escritas por dia
        </Typography> */}
        <Typography className="card-title">57h</Typography>
        <Typography className="card-legend">Horas trabalhadas</Typography>
      </div>
    </CardEstatisticContainer>
  );
};

export default CardEstatistic;
