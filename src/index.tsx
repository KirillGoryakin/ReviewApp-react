import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { Provider } from 'react-redux';
import './assets/index.css';
import store from 'store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);