import store, { persistor } from '@/core/redux';
import AppRouters from '@/core/routers';
import 'antd/dist/antd.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouters />
    </PersistGate>
  </Provider>,
);
