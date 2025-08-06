import { InputHTMLAttributes, forwardRef } from 'react';
import { Container } from './Radio.styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
};

export const Radio = forwardRef<HTMLInputElement, Props>(function Radio(
  { children, isSelected, ...rest },
  ref
) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </Container>
  );
});
