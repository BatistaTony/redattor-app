import styled from '@emotion/styled';
import { Logo as LargeLogo, MiniLogo } from 'assets/icons';

import React from 'react';

const Div = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: 20,
  marginTop: 5,
  marginBottom: 50,
}));

const Logo = ({ menuIsOpen }: { menuIsOpen: boolean }) => (
  <Div>
    {menuIsOpen ? <LargeLogo style={{ marginLeft: '16px' }} /> : <MiniLogo />}
  </Div>
);

export default Logo;
