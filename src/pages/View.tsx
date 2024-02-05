import { useEffect } from 'react';
import { StateManagerProvider } from '../context/stateManager';
import CatViewer from '../modules/CatViewer';

function View() {

  return (
    <StateManagerProvider>
      <main className="app">
        <CatViewer />
      </main>
    </StateManagerProvider>
  );
}

export default View;
