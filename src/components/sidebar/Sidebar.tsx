import { Container, SidebarLogoWrapper } from './sidebar.style';
import { ReactComponent as Logo } from '../../assets/sidebar/logo.svg';

export const Sidebar = () => (
  <Container>
    <SidebarLogoWrapper>
      <Logo />
    </SidebarLogoWrapper>
  </Container>
);
