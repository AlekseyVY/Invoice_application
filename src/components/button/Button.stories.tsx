import { Meta } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Button1: React.VFC<{}> = () => <Button width={150} color="FFF" bgColor="7C5DFA" text="New Invoice" hoverBgColor="9277FF" hoverColor="FFF" />;

export const Button2: React.VFC<{}> = () => <Button width={131} color="FFF" bgColor="7C5DFA" text="Mark as Paid" hoverBgColor="9277FF" hoverColor="FFF" />;

export const Button3Light: React.VFC<{}> = () => <Button width={73} color="7E88C3" bgColor="F9FAFE" text="Edit" hoverBgColor="DFE3FA" hoverColor="7E88C3" />;

export const Button3Dark: React.VFC<{}> = () => <Button width={73} color="DFE3FA" bgColor="252945" text="Edit" hoverBgColor="FFFFFF" hoverColor="DFE3FA" />;

export const Button4Light: React.VFC<{}> = () => <Button width={133} color="888EB0" bgColor="373B53" text="Save as Draft" hoverBgColor="0C0E16" hoverColor="888EB0" />;

export const Button4Dark: React.VFC<{}> = () => <Button width={133} color="DFE3FA" bgColor="373B53" text="Save as Draft" hoverBgColor="1E2139" hoverColor="DFE3FA" />;

export const Button5: React.VFC<{}> = () => <Button width={89} color="FFFFFF" bgColor="EC5757" text="Delete" hoverBgColor="FF9797" hoverColor="FFFFFF" />;

export const Button6: React.VFC<{}> = () => <Button width={133} color="7E88C3" bgColor="F9FAFE" text="+ Add New Item" hoverBgColor="DFE3FA" hoverColor="7E88C3" />;
