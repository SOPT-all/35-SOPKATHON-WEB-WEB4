import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const cardWrapper = css`
  width: 100%;
  height: 16rem;
  padding: 0.5rem;
  background-color: ${theme.color.gray100};
  text-align: center;
`;

export const content = css`
  width: 240px;
  margin: 0;
  color: ${theme.color.gray800};
  ${theme.font.body1_m_16};
  line-height: 1.5;
  height: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const moreButton = css`
  ${theme.font.subtitle6_b_14}
  margin-top: 10px;
  color: ${theme.color.black};
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: ${theme.color.gray800};
  }
`;
