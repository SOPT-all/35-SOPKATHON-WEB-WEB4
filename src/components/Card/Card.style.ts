import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const emoticonWrapper = css`
  display: flex;
  gap: 16px; 
  overflow-x: auto; 
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  &::-webkit-scrollbar {
    display: none; 
  }
  padding: 8px 0;
  background-color: ${theme.color.gray200}; 
`;

export const emoticonItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.gray300};
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 0.75rem; 
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.color.gray100};
  }
`;

export const emoticonIcon = css`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const emoticonText = css`
  ${theme.font.body1_m_16}
  color: ${theme.color.gray800};
  text-align: center;
  margin-left: 4px; 
`;

export const emoticonCount = css`
  ${theme.font.body3_b_12}
  color: ${theme.color.gray500};
  margin-left: 4px;
`;
