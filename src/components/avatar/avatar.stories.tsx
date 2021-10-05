import { Meta } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';

export default {
  title: 'Components/avatar',
  component: Avatar,
} as Meta;

export const avatar: React.VFC<{}> = () => <Avatar />;
