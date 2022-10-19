import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {
  IconHome,
  IconReport,
  IconLayout,
  IconUsers,
  IconSort,
  IconSettings,
  IconLogout,
} from 'assets/icons';

export const appBarData = [
  { text: 'Dashboard', icon: IconHome, path: 'dashboard' },
  { text: 'Relatorios', icon: IconReport, path: 'relatorios' },
  { text: 'Layouts da Pagina', icon: IconLayout, path: 'layouts' },
  { text: 'Utilizadores', icon: IconUsers, path: 'utilizadores' },
  {
    text: 'Registro de alteracoes',
    icon: IconSort,
    path: 'registro-de-alteracoes',
  },
  { text: 'Definicoes', icon: IconSettings, path: 'definicoes' },
  { text: 'Sair', icon: IconLogout, path: 'null' },
];

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(10)} + 1px)`,
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  background: 'green',
  height: 0,
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));
