import styled from 'styled-components';

import { mixinsFonts } from '../../styles/mixins.fonts';

export const HeaderContainer = styled.header`
  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${({ theme }) => theme.colors['purple-light']};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }

    padding: 10px 8px;
    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      ${mixinsFonts.textS};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`;

export const Switch = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .slider {
    position: absolute;
    right: 0;
    height: 30px;
    width: 60px;
    border-radius: 30px;
    background-color: #272751;
    cursor: pointer;
    transition: 0.5s;
    z-index: 99;

    &::before {
      position: absolute;
      left: 5px;
      bottom: 5px;
      height: 20px;
      width: 20px;
      content: '';
      border-radius: 50%;
      background-color: white;
      transition: 0.5s;
    }
  }

  #toggle {
    opacity: 0;

    &:checked {
      & ~ .slider {
        background-color: white;
      }
      & ~ .slider:before {
        background-color: white;
        box-shadow: inset -8px -6px 0 0px #272751;
        transform: translate(30px, 1px);
      }
      & ~ .slide-block {
        left: 0;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
`;
