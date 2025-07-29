import { ThemeProvider } from 'styled-components';
import { coffees } from './assets/coffees/coffees';
import { defaultTheme } from './styles/themes/default';
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello world</h1>
      <img src={coffees[1].image} alt="Americano Coffee" />
    </ThemeProvider>
  );
}
