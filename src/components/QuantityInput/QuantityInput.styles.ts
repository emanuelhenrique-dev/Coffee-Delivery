import styled from 'styled-components';

export const QuantityInputContainer = styled.div`
  width: 72px;
  max-width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.colors.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors['base-title']};
    text-align: center;
  }
`;
