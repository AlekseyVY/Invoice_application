import { Container } from './button.style';

export interface ButtonProps {
  /**
   * Button width.
   */
  width: number;
  /**
   * Background color.
   */
  bgColor: string;
  /**
   * Button text.
   */
  text: string;
  /**
   * Color of text.
   */
  color: string;
  /**
   * Color of text on hover.
   */
  hoverColor: string;
  /**
   * Background color on hover.
   */
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
