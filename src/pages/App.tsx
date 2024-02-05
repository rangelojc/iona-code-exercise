import CatBrowser from '../components/CatBrowser';
import { StateManagerProvider } from '../context/stateManager';

function App() {
  return (
    <StateManagerProvider>
      <main className="app">
        <header className="header">
          <h1>Cat Browser</h1>
        </header>
        <section className="body">
          <CatBrowser />
        </section>
      </main>
    </StateManagerProvider>
  );
}

export default App;
