import { useState } from 'react';
import {
  CoffeeImg,
  Container,
  Control,
  Description,
  Order,
  Price,
  QuantityInput,
  Tags,
  Title
} from './Card.styles';
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface CardProps {
  coffee: Coffee;
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(1);
  const theme = useTheme();

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2).replace('.', ',')}</span>
        </Price>

        <Order>
          <QuantityInput>
            <button onClick={decrementQuantity}>
              <MinusIcon size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
              <PlusIcon size={14} />
            </button>
          </QuantityInput>

          <button>
            <ShoppingCartIcon size={22} color={theme.colors['base-card']} />
          </button>
        </Order>
      </Control>
    </Container>
  );
}
