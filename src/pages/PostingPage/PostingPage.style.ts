import { css, Theme } from '@emotion/react';

export const pageContainer = (theme: Theme) => css`
  width: 100%;
  height: 100dvh;
  background-color: ${theme.color.black};
`;

export const mainStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.4rem 2rem 4rem;
  width: 100%;
`;

export const topSection = (theme: Theme) => css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3.2rem;

  h1 {
    margin-left: 6.1rem;
    color: ${theme.color.white};
    ${theme.font.subtitle1_b_20};
  }
`;

export const backIcon = css`
  width: 3.2rem;
  height: 3.2rem;
`;

export const textareaSection = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36rem;
  border-radius: 8px;
  border: 1px solid ${theme.color.gray600};
  background-color: ${theme.color.gray900};

  margin-top: 3.4rem;
`;

export const textareaStyle = (theme: Theme) => css`
  text-align: center;
  vertical-align: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  border: none;
  background-color: transparent;
  color: ${theme.color.white};
  ${theme.font.body1_r_16};

  &:focus {
    outline: none;
  }
`;

export const selectBackgroundContainer = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;

  margin-top: 1.8rem;
  margin-bottom: 2.4rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.6rem;
    height: 5.6rem;

    border-radius: 8px;
    background-color: ${theme.color.gray200};
    color: ${theme.color.white};
  }
`;

export const uploadButton = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.2rem 0;
  border-radius: 50px;
  background-color: ${theme.color.lime};

  color: ${theme.color.black};
  ${theme.font.subtitle3_b_18};
`;
