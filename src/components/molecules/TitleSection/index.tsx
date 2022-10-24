import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import colors from '@utils/colors';
import { TitleSectionProps } from './types';

const TitleSection: FC<TitleSectionProps> = ({ title, description }) => (
  <Box style={{ display: 'flex', position: 'relative' }}>
    <Box
      sx={{
        width: 3,
        height: '100%',
        position: 'absolute',
        backgroundColor: colors.purpleDark,
      }}
    />
    <Box sx={{ marginLeft: '10px' }}>
      <Typography color={colors.Black} variant="h5" fontWeight={700}>
        {title}
      </Typography>
      <Typography color={colors.gray2} variant="body1" fontSize={14}>
        {description}
      </Typography>
    </Box>
  </Box>
);

export default TitleSection;
