import { css } from '@emotion/react';
import theme from '@styles/theme';

export const cardWrapper = css`
  margin-top: 1rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.gray200};
  text-align: center;
  margin: 0 auto;
`;

export const content = css`
  font: ${theme.font.body1_m_16}
  line-height: 1.5;
  color: ${theme.color.black};
`;

export const moreButton = css`
  margin-top: 5rem;
  ${theme.font.subtitle5_b_16}
  color: ${theme.color.black};
  cursor: pointer;
`;
