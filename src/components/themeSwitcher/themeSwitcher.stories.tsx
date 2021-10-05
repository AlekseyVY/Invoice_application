import { Meta } from '@storybook/react';
import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
} as Meta;

export const themeSwitcher: React.VFC<{}> = () => <ThemeSwitcher />;
