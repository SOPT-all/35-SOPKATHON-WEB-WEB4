import { css, Theme } from '@emotion/react';

export const cardWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 16rem;
  padding: 3.4rem 6.2rem;
  margin-bottom: 0.9rem;
  background-color: ${theme.color.gray900};
`;

export const contentStyle = (theme: Theme) => css`
  ${theme.font.body1_m_16};
  color: ${theme.color.white};
  text-align: center;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

export const moreButton = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  padding: 0 1rem;
  background-color: ${theme.color.gray900};
  border: none;
  border-radius: 4px;
  color: ${theme.color.lime};
  cursor: pointer;

  ${theme.font.subtitle6_b_14}
`;
