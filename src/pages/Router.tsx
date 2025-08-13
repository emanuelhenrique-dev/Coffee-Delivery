import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Cart } from './Cart/Cart';
import { Success } from './Success/Success';
import { DefaultLayout } from '../layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
