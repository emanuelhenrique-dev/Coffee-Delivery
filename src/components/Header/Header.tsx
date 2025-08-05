import { Link } from 'react-router-dom';
import { Aside, HeaderContainer } from './Header.styles';
import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react';

export function Header() {
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

        <Link to="/cart">
          <ShoppingCartIcon size={22} weight="fill" />
          <span>3</span>
        </Link>
      </Aside>
    </HeaderContainer>
  );
}
