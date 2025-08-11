import { useContext, useEffect, useState } from 'react';
import {
  CoffeeImg,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title
} from './Card.styles';
import { CheckFatIcon, ShoppingCartIcon } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { QuantityInput } from '../../../../components/QuantityInput/QuantityInput';
import { CartContext } from '../../../../contexts/CartContext';

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
  const [isItemAdded, setIsItemAdded] = useState(false);
  const theme = useTheme();
  const { addItem } = useContext(CartContext);

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

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
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFatIcon
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            ) : (
              <ShoppingCartIcon
                size={22}
                color={theme.colors['base-card']}
                weight="fill"
              />
            )}
          </button>
        </Order>
      </Control>
    </Container>
  );
}
