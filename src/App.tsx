import { ThemeProvider } from 'styled-components';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { coffees } from './assets/coffees/coffees';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './pages/Router';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
