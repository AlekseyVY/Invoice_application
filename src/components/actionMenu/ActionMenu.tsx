import { useState } from 'react';
import { Button } from '../button/Button';
import {
  Container, InnerContainer, Logo, LogoContainer, SecondText,
} from './actionMenu.style';
import { Filter } from '../filter/Filter';

export const ActionMenu = () => {
  const [invoicesCount, setInvoicesCount] = useState(0);
  useState(() => {
    setInvoicesCount(0);
  });
  return (
    <Container>
      <LogoContainer>
        <Logo>Invoices</Logo>
        <SecondText>{invoicesCount ? `There are ${invoicesCount} total invoices` : 'No invoices'}</SecondText>
      </LogoContainer>
      <InnerContainer>
        <Filter />
        <Button width={150} color="FFF" bgColor="7C5DFA" text="New Invoice" hoverBgColor="9277FF" hoverColor="FFF" />
      </InnerContainer>
    </Container>
  );
};
