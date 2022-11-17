import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { Provider } from 'react-redux';
import './assets/index.css';
import store, { persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);