import { css } from '@emotion/react';

export const headerContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem; // 수정 예정

  background-color: pink;

  section {
    &:nth-of-type(1) {
      display: flex;
      justify-content: flex-start;
      width: 33.3%;
    }
    &:nth-of-type(2) {
      display: flex;
      justify-content: center;
      width: 33.3%;
    }
    &:nth-of-type(3) {
      display: flex;
      justify-content: flex-end;
      width: 33.3%;
    }
  }
`;
