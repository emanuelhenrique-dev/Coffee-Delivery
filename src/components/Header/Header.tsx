import { Link } from 'react-router-dom';
import { Aside, HeaderContainer } from './Header.styles';
import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery Logo" />
      </Link>

      <Aside>
        <div>
          <MapPinIcon size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to="/cart" aria-disabled={cart.length === 0}>
          <ShoppingCartIcon size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </HeaderContainer>
  );
}
