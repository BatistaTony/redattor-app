import React, { FC, ReactNode } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@components/molecules/AppBar';
import colors from '@utils/colors';

const Content: FC<{ children: ReactNode }> = ({ children }) => (
  <Box
    style={{ width: '100%', height: '100vh', flex: 1 }}
    sx={{
      backgroundColor: colors.light4,
      padding: '30px',
      paddingTop: '15px',
    }}
  >
    <AppBar />
    <Box sx={{ marginTop: '30px' }}>{children}</Box>
  </Box>
);

export default Content;
