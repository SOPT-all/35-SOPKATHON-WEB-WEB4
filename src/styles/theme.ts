import { css } from '@emotion/react';

const theme = {
  color: {
    white: '#FFFFFF',
    gray100: '#F9FAFE',
    gray200: '#EFF0F4',
    gray300: '#D9DADD',
    gray400: '#C5C6CB',
    gray500: '#93959D',
    gray600: '#75777F',
    gray700: '#43444B',
    gray800: '#323339',
    gray900: '#212224',
    black: '#000000',
  },

  font: {
    title1_b_48: css`
      font-size: 48px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -2px;
    `,
    title2_b_40: css`
      font-size: 40px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -2px;
    `,
    title3_b_28: css`
      font-size: 28px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -2px;
    `,
    title4_b_24: css`
      font-size: 24px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -2px;
    `,

    subtitle1_b_20: css`
      font-size: 20px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -2px;
    `,
    subtitle2_m_20: css`
      font-size: 20px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -2px;
    `,
    subtitle3_b_18: css`
      font-size: 18px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -2px;
    `,
    subtitle4_m_18: css`
      font-size: 18px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -2px;
    `,
    subtitle5_b_16: css`
      font-size: 16px;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: -2px;
    `,
    subtitle6_b_14: css`
      font-size: 14px;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: -2px;
    `,

    body1_m_16: css`
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -2px;
    `,
    body2_m_14: css`
      font-size: 14px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -2px;
    `,
    body3_b_12: css`
      font-size: 12px;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: -2px;
    `,
    body4_m_12: css`
      font-size: 12px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -2px;
    `,
    body5_b_10: css`
      font-size: 10px;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: -2px;
    `,
    body6_m_10: css`
      font-size: 10px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -2px;
    `,
  },
};

export type ColorType = typeof theme.color;
export type FontType = typeof theme.font;

export interface ThemeType {
  color: ColorType;
  font: FontType;
}

export default theme;
