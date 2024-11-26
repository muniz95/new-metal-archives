import { useState } from 'react';
import { AppRouter } from '@/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryConfig } from '@/lib/react-query';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import theme from './theme';
import styles from './styles';

const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={styles} />
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
