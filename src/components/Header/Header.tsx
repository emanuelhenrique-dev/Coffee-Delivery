import { Link } from 'react-router-dom';
import { Aside, HeaderContainer, Switch } from './Header.styles';
import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useTheme } from 'styled-components';

interface HeaderProps {
  toggleTheme: () => void;
}
export function Header({ toggleTheme }: HeaderProps) {
  const { cart } = useContext(CartContext);
  const theme = useTheme();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery Logo" />
      </Link>

      <Aside>
        <Switch onChange={toggleTheme}>
          <input id="toggle" type="checkbox" checked={theme.name === 'dark'} />
          <span className="slider"></span>
        </Switch>
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
