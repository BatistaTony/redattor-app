import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, FC } from 'react';
import { Typography } from '@mui/material';

const SimpleBackdrop: FC<{ isOpen: boolean; text: string }> = ({
  isOpen,
  text,
}) => (
  <Backdrop
    sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
    open={isOpen}
    style={{ display: 'flex', flexDirection: 'column' }}
  >
    <CircularProgress color="inherit" />
    <Typography>{text}</Typography>
  </Backdrop>
);

export default SimpleBackdrop;
