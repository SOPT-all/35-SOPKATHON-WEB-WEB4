import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const footerContainer = (theme: Theme) => css`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 2rem;
    height: 7rem;
    background-color: ${theme.color.gray900};

    span{
        color: ${theme.color.gray600};
        ${theme.font.body4_m_12};
    }
`;

export const footerBtnWrapper = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        color: red;
    }
`;

export const footerIconStyle = css`
    width: 3.2rem;
    height: 3.2rem;
`;