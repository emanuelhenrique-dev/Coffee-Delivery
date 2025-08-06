import {
  FocusEvent,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  useState
} from 'react';
import { Box, Container } from './TextInput.styles';
// seu styled-component

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  // error?: FieldError;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(
  { optional, containerProps, onFocus, onBlur, ...rest },
  ref
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />

        {optional ? <span>Opcional</span> : null}
      </Container>

      {/* {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null} */}
    </Box>
  );
});
