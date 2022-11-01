/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import {
  Avatar,
  Box,
  Button,
  Skeleton,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { FlipCameraIos } from '@mui/icons-material';
import { holes } from '@utils/holes';

const AvatarSection: FC<{ fullName?: string; userHole?: string }> = ({
  fullName,
  userHole,
}) => {
  const { palette } = useTheme();

  const { colors } = palette;
  return (
    <Box display="flex" alignItems="center" marginBottom="40px">
      <Avatar style={{ width: '97px', height: '97px' }} />
      <Box marginLeft="20px">
        <Typography fontSize={24} fontWeight={700} color={colors.Gray}>
          {fullName || (
            <Skeleton
              variant="rectangular"
              width="200px"
              height={24}
              style={{ marginBottom: 10 }}
            />
          )}
        </Typography>
        {}
        <Typography fontSize={16} color={colors.gray2}>
          {userHole ? (
            holes[userHole as any]
          ) : (
            <Skeleton variant="rectangular" width="100px" height={16} />
          )}
        </Typography>
      </Box>

      <Button
        variant="contained"
        disableElevation
        style={{
          backgroundColor: `${colors.gray4}50`,
          padding: '0 20px',
          color: colors.gray2,
          fontSize: 12,
          height: 34,
          marginLeft: 30,
        }}
        startIcon={<FlipCameraIos />}
      >
        Alterar Imagem
      </Button>
    </Box>
  );
};

export default AvatarSection;
