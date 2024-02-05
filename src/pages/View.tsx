import CatBrowser from '../modules/CatBrowser';
import { StateManagerProvider } from '../context/stateManager';

function View() {
  return (
    <StateManagerProvider>
      <main className="app">
        hi
      </main>
    </StateManagerProvider>
  );
}

export default View;
