import { useEffect, useState } from 'react';
import { ReactComponent as NoInvoices } from '../../assets/noInvoices.svg';
import { LogoText, NoInvoicesWrapper, SecText } from './invoicesRenderer.style';

// TODO: invoice generation, fetching data from store, create story.
export const InvoicesRenderer = () => {
  const [invoices, setInvoices] = useState(true);

  useEffect(() => {
    setInvoices(false);
  });
  return (
    <div>
      {invoices ? 'Invoices'
        : (
          <NoInvoicesWrapper>
            <NoInvoices />
            <LogoText>There is nothing here</LogoText>
            <div>
              <SecText>Create an invoice by clicking the</SecText>
              <SecText>
                <b>New Invoice</b>
                &nbsp;
                button and get started
              </SecText>
            </div>
          </NoInvoicesWrapper>
        )}
    </div>
  );
};
