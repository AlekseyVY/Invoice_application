import { Container } from './button.style';

interface ButtonProps {
  width: number;
  bgColor: string;
  text: string;
  color: string;
  hoverColor: string;
  hoverBgColor: string;
}

export const Button = ({
  width, bgColor, color, text, hoverBgColor, hoverColor,
}: ButtonProps) => (
  <Container
    width={width}
    bgColor={bgColor}
    color={color}
    hoverBgColor={hoverBgColor}
    hoverColor={hoverColor}
  >
    {text}
  </Container>
);
