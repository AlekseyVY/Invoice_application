import { Meta } from '@storybook/react';
import React from 'react';
import { InvoicesRenderer } from './InvoicesRenderer';

export default {
  title: 'Components/InvoicesRenderer',
  component: InvoicesRenderer,
} as Meta;

export const invoiceRenderer: React.VFC<{}> = () => <InvoicesRenderer />;
