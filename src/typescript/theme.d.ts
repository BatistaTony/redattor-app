import { PaletteOptions } from '@mui/material/styles';
import colors from '@utils/colors';

declare module '@mui/material/styles' {
  interface Palette {
    colors: typeof colors;
  }
  interface PaletteOptions {
    colors: typeof colors;
  }
}
