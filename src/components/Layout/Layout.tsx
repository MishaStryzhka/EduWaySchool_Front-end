import { Outlet } from 'react-router-dom';
import { Container, Footer, Nav, StyledLink } from './Layout.styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <Nav>
                <StyledLink to='/'>🏠 Home</StyledLink>
                <StyledLink to='/about'>ℹ️ About</StyledLink>
                <StyledLink to='/contact'>📞 Contact</StyledLink>
            </Nav>
            <Outlet /> {/* Тут буде рендеритися контент сторінки */}
            <Footer>© 2025 My Website</Footer>
        </Container>
    );
};

export default Layout;
