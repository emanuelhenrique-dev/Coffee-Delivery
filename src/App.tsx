import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/themes/default';
import { darkTheme } from './styles/themes/dark';

import { GlobalStyle } from './styles/global';
import { Router } from './pages/Router';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './contexts/CartContext';
import { useState } from 'react';

export function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? darkTheme : defaultTheme
  );

  function toggleTheme() {
    setTheme((prev) => {
      const newTheme = prev === defaultTheme ? darkTheme : defaultTheme;
      localStorage.setItem(
        'theme',
        newTheme === darkTheme ? 'dark' : 'default'
      );
      return newTheme;
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BrowserRouter>
        <CartContextProvider>
          <Router toggleTheme={toggleTheme} />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
