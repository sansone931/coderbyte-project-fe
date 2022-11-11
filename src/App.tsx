import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { Contacts } from './pages';
import { GlobalStyle, theme } from './styles';

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Contacts />
  </ThemeProvider>
);
