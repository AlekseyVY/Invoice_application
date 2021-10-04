import styled from 'styled-components';
import logoWrapper from '../../assets/sidebar/sidebar_logo_wrapper.svg';

export const Container = styled.div`
  width: 103px;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 0 20px 20px 0;
  background-color: #373B53;
`;

export const SidebarLogoWrapper = styled.div`
  width: 100%;
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${logoWrapper});
`;
