import styled from 'styled-components';
import { theme } from '../common/theme';

export const CardsWrapper = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: unset;
  @media (max-width: ${theme.viewport.tablet}) {
    width: 90%;
  }
`;

export const SingleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 600px;
  justify-content: space-around;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 14px;
  text-align: center;
  .price {
    color: green;
  }
  span {
    margin-right: ${theme.spacer_light};
    color: red;
  }
  .price, span {
    font-size: 18px;
  }
  background-color: ${theme.colors.light};
  border-radius: ${theme.spacer};
  @media (max-width: ${theme.viewport.tablet}) {
    padding: ${theme.spacer_light};
    width: 45%;
  }
  @media (max-width: ${theme.viewport.mobile}) {
    width: 90%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.viewport.tablet}) {
    padding: ${theme.spacer_light};
  }
`;

export const PriceSpan = styled.span`
  text-decoration: line-through;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: ${theme.spacer};
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: ${theme.colors.light};
  @media (min-width: ${theme.viewport.tablet}) {
  }
`;

export const ItemsInnerWrap = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${theme.colors.light};
`;

export const LogoWrap = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  background-color: ${theme.colors.light};
`;

export const Logo = styled.div`
  display: flex;
`;