import { coffees } from './assets/coffees/coffees';
export function App() {
  return (
    <>
      <h1>Hello world</h1>
      <img src={coffees[1].image} alt="Americano Coffee" />
    </>
  );
}
