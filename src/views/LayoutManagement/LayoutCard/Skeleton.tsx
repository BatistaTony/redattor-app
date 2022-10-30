import { Skeleton, Box, useTheme } from '@mui/material';

const LayoutCardSkeleton = () => {
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
        backgroundColor: `${colors.white}100`,
        borderRadius: 8,
        marginBottom: 10,
        padding: '0 30px',
        position: 'relative',
      }}
    >
      <Skeleton
        variant="rounded"
        width="100%"
        height="100%"
        sx={{ bgcolor: colors.light2 }}
        style={{ position: 'absolute', left: 0 }}
      />
      <Box display="flex" flexDirection="row" alignItems="center">
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
          <Skeleton variant="rounded" width="100%" height="100%" />
        </Box>

        <Box sx={{ marginLeft: '16px' }}>
          <Skeleton
            variant="rounded"
            width={110}
            height={20}
            style={{ marginBottom: 4 }}
          />

          <Skeleton variant="rounded" width={150} height={14} />
        </Box>
      </Box>

      <Skeleton variant="rounded" width={120} height={30} />
    </Box>
  );
};

export default LayoutCardSkeleton;
