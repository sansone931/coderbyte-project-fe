import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { Contacts } from './pages';
import { GlobalStyle, theme } from './styles';

const queryClient = new QueryClient();

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <Contacts />
    </QueryClientProvider>
  </ThemeProvider>
);
