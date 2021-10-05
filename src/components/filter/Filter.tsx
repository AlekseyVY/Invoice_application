import { ReactComponent as Switch } from '../../assets/icon-arrow-down.svg';
import { Container, Text } from './filter.style';

export const Filter = () => (
  <Container>
    <Text>Filter by status</Text>
    <Switch />
  </Container>
);
