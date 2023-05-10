import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
