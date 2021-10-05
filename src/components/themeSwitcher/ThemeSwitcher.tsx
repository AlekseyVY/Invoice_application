import { useState } from 'react';
import { ReactComponent as Light } from '../../assets/icon-sun.svg';
import { ReactComponent as Dark } from '../../assets/icon-moon.svg';
import { Container } from './themeSwitcher.style';

export const ThemeSwitcher = () => {
  const [light, setLight] = useState<Boolean>(true);
  return (
    <Container onClick={() => setLight(!light)}>
      {light ? <Light /> : <Dark />}
    </Container>
  );
};
