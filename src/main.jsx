import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { configureStore, populateProduce } from './store';
import { Provider } from 'react-redux';
const store = configureStore()

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>
);
