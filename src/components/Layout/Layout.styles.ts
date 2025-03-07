import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../styles/media';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    ${media.lg`
    max-width: 90%; // На ноутбуках трохи менше
  `}

    ${media.md`
    max-width: 95%; // На планшетах ще вужче
    padding: 15px;
  `}

  ${media.sm`
    max-width: 100%; // На мобільних ширина 100%
    padding: 10px;
  `}
`;

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
    padding: 10px;
    background: #282c34;
    justify-content: space-between;

    ${media.md`
    flex-direction: column; // На планшетах навігація стає вертикальною
    align-items: center;
  `}
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 5px 10px;

    &:hover {
        text-decoration: underline;
    }

    ${media.sm`
    font-size: 16px; // На мобільних трохи менший розмір тексту
  `}
`;

export const Footer = styled.footer`
    text-align: center;
    padding: 10px;
    background: #ddd;
    margin-top: 20px;
    font-size: 14px;

    ${media.sm`
    font-size: 12px; // Менший текст на мобільних
  `}
`;
