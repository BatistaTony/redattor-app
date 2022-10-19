/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { pathTitles } from '@utils/paths';
import colors from '@utils/colors';
import AvatarWrapper from './avatarWrapper';

const AppBar = () => {
  const router = useRouter();
  const [currentPash, setCurrentPath] = useState<string>();

  useEffect(() => {
    if (!router.isReady) return;
    if (router?.query?.id) {
      setCurrentPath(router.query.id[0]);
    } else if (router?.query) {
      setCurrentPath(`dashboard`);
    }
  }, [router]);

  return (
    <Box
      style={{
        width: '100%',
        height: '60px',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: `0 0 8 ${colors.suberBlack}05`,
      }}
      sx={{
        backgroundColor: ` ${colors.white}`,
        padding: '0 30px',
      }}
    >
      <Typography variant="subtitle2" fontSize={14} color={colors.light}>
        {currentPash && pathTitles[currentPash]}
      </Typography>

      <AvatarWrapper />
    </Box>
  );
};

export default AppBar;
