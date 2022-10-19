import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import NotificationIcon from '@mui/icons-material/NotificationsOutlined';

const AvatarWrapper = () => (
  <Stack direction="row" alignItems="center" spacing={2}>
    <Badge badgeContent={3} color="error">
      <NotificationIcon color="action" />
    </Badge>
    <Avatar alt="Cindy Baker" src="" />
  </Stack>
);

export default AvatarWrapper;
