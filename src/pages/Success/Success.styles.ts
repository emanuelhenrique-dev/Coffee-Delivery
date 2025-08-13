import styled from 'styled-components';

import { mixinsFonts } from '../../styles/mixins.fonts';

export const Container = styled.main`
  display: flex;
  max-width: 1160px;
  margin: 0 auto;
  padding: 80px 20px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;

  img {
    margin-bottom: -13px;
  }

  @media (max-width: 1050px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 40px 20px;

    img {
      width: 100%;
      max-width: 80%;
      margin-bottom: 0;
    }
  }
`;

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    ${mixinsFonts.titleL};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  span {
    ${mixinsFonts.textL};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;

export const Info = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
`;

export const InfoContent = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors['white']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`;
