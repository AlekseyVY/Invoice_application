import { Container } from './app.style';
import { InvoicesRenderer } from './components/invoicesRenderer/InvoicesRenderer';
import { Sidebar } from './components/sidebar/Sidebar';
import { ActionMenu } from './components/actionMenu/ActionMenu';

function App() {
  return (
    <Container>
      <Sidebar />
      <ActionMenu />
      <InvoicesRenderer />
    </Container>
  );
}

export default App;
