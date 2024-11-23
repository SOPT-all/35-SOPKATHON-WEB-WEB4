import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const titleStyle = (theme:Theme) => css`
  height: 6rem;
  color: ${theme.color.white};
  ${theme.font.subtitle1_b_20};
  text-align: center;
  align-content: center;

  span {
    color: ${theme.color.lime};
  }
`;

export const failRecordsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const failCardWrapper = css`
  display: flex;
  flex-direction: column;
`;
