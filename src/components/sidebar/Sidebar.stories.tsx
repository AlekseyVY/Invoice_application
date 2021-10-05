import { Meta } from '@storybook/react';
import React from 'react';
import { Sidebar } from './Sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

export const sideBar: React.VFC<{}> = () => <Sidebar />;
