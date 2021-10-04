import { Container } from './app.style';
import { InvoicesRenderer } from './components/invoicesRenderer/InvoicesRenderer';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <Container>
      <Sidebar />
      <InvoicesRenderer />
    </Container>
  );
}

export default App;
