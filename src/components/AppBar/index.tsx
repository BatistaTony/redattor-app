import React, { useState, useCallback } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import Logo from './components/logoWrapper';
import { appBarData, Drawer } from './utils';
import CircleButton from './components/makeManuLargeButtton';

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const route = useRouter();

  const toggleDrawer = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleManuItem = (index: number, path: string) => {
    if (index === appBarData.length - 1) {
      return;
    }
    setSelected(index);
    route.push(`/home/${path}`);
  };

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
                  background: index === selected ? '#6A6CF620' : '#fff',
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
                  {icon({ color: index === selected ? '#6A6CF6' : '#7A7D82' })}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    fontSize: 10,
                    color: index === selected ? '#6A6CF6' : '#7A7D82',
                  }}
                />
              </ListItemButton>

              {index === selected && (
                <div
                  style={{
                    width: '10px',
                    background: '#6A6CF6',
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
