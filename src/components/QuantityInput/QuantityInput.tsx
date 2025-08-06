import { MinusIcon, PlusIcon } from '@phosphor-icons/react';
import { QuantityInputContainer } from './QuantityInput.styles';

interface QuantityInputProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button onClick={decrementQuantity}>
        <MinusIcon size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <PlusIcon size={14} />
      </button>
    </QuantityInputContainer>
  );
}
