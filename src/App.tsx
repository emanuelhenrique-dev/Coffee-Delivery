import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './pages/Router';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './contexts/CartContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  );
}
