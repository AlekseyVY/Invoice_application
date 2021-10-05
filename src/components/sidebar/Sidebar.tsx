import {
  Container, Delimeter, MenuWrapper, SidebarLogoWrapper,
} from './sidebar.style';
import { ReactComponent as Logo } from '../../assets/sidebar/logo.svg';
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher';
import { Avatar } from '../avatar/Avatar';

export const Sidebar = () => (
  <Container>
    <SidebarLogoWrapper>
      <Logo />
    </SidebarLogoWrapper>
    <MenuWrapper>
      <ThemeSwitcher />
      <Delimeter />
      <Avatar />
    </MenuWrapper>
  </Container>
);
