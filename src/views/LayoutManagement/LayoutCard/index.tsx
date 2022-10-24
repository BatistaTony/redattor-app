import { Box, Typography, Button, useTheme } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { RightArrow } from 'assets/icons';
import { Layout } from '../types';

const LayoutCard: FC<Layout> = ({ icon, title, description }) => {
  const theme = useTheme();

  const { palette } = theme;
  const { colors } = palette;

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        backgroundColor: colors.white,
        borderRadius: 8,
        marginBottom: 10,
        padding: '0 30px',
      }}
    >
      <Box display="flex" flexDirection="row">
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: `${colors.purpleDark}20`,
            borderRadius: 8,
            width: 52,
            height: 52,
          }}
        >
          <Image alt="icon" src={icon} />
        </Box>

        <Box sx={{ marginLeft: '16px' }}>
          <Typography
            color={colors.Gray}
            variant="body1"
            fontWeight={700}
            fontSize={18}
          >
            {title}
          </Typography>
          <Typography color={colors.gray2} variant="body1" fontSize={14}>
            {description}
          </Typography>
        </Box>
      </Box>

      <Button size="small" color="inherit" endIcon={<RightArrow />}>
        <Typography
          color={colors.gray2}
          variant="body1"
          fontSize={14}
          textTransform="lowercase"
        >
          Configuar
        </Typography>
      </Button>
    </Box>
  );
};

export default LayoutCard;
