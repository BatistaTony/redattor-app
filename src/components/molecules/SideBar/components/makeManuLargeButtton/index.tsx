import { SideIcon } from 'assets/icons';
import React, { FC } from 'react';

const CircleButton: FC<{ toggleDrawer: () => void; isOpen: boolean }> = ({
  toggleDrawer,
  isOpen,
}) => (
  <div
    style={{
      marginTop: 20,
      zIndex: 1200,
    }}
  >
    <SideIcon
      onClick={toggleDrawer}
      width={32}
      height={32}
      style={{
        position: 'fixed',
        zIndex: 30,
        marginLeft: -20,
        cursor: 'pointer',
        transition: 'all ease 800ms',
        transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
      }}
    />
  </div>
);

export default CircleButton;
