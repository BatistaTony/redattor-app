import React, { useState, useCallback, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material';
import Logo from './components/logoWrapper';
import { appBarData, Drawer } from './utils';
import CircleButton from './components/makeManuLargeButtton';

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const [currentPash, setCurrentPath] = useState<string>();
  const [loadingPash, setLoadingPash] = useState(true);

  const router = useRouter();

  const theme = useTheme();

  const { palette } = theme;
  const { colors } = palette;

  useEffect(() => {
    if (!router.isReady) return;
    if (router?.query?.id) {
      setCurrentPath(router.query.id[0]);
      setLoadingPash(false);
    } else if (router?.query) {
      router.push(`/home/dashboard`);
      setLoadingPash(false);
    }
  }, [router]);

  const toggleDrawer = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleManuItem = (index: number, path: string) => {
    if (index === appBarData.length - 1) {
      return;
    }
    router.push(`/home/${path}`);
  };

  if (loadingPash) {
    return <div />;
  }

  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <Drawer variant="permanent" open={open}>
        <Logo menuIsOpen={open} />
        <List>
          {appBarData.map(({ text, icon, path }, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: 'block', marginBottom: '5px' }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  background:
                    path === currentPash
                      ? `${colors.purpleDark}20`
                      : colors.white,
                  margin: '0 16px',
                  borderRadius: 2,
                }}
                onClick={() => {
                  handleManuItem(index, path);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {icon({
                    color:
                      path === currentPash ? colors.purpleDark : colors.gray2,
                  })}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    fontSize: 10,
                    color:
                      path === currentPash ? colors.purpleDark : colors.gray2,
                  }}
                />
              </ListItemButton>

              {path === currentPash && (
                <div
                  style={{
                    width: '10px',
                    background: colors.purpleDark,
                    position: 'absolute',
                    top: 0,
                    bottom: 1,
                    right: -5,
                    borderRadius: 8,
                  }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>

      <CircleButton toggleDrawer={toggleDrawer} isOpen={open} />
    </div>
  );
}
