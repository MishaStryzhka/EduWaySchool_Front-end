import { css } from 'styled-components';

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
};

export const media = {
    sm: (styles: TemplateStringsArray) => css`
        @media (max-width: ${breakpoints.sm}) {
            ${styles}
        }
    `,
    md: (styles: TemplateStringsArray) => css`
        @media (max-width: ${breakpoints.md}) {
            ${styles}
        }
    `,
    lg: (styles: TemplateStringsArray) => css`
        @media (max-width: ${breakpoints.lg}) {
            ${styles}
        }
    `,
    xl: (styles: TemplateStringsArray) => css`
        @media (max-width: ${breakpoints.xl}) {
            ${styles}
        }
    `,
    xxl: (styles: TemplateStringsArray) => css`
        @media (max-width: ${breakpoints.xxl}) {
            ${styles}
        }
    `,
};
