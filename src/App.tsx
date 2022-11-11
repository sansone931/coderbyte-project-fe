import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages';
import { GlobalStyle, theme } from './styles';

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);
