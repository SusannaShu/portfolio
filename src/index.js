import React from 'react'
import { createRoot } from 'react-dom/client'; import './index.css'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root');
const root = createRoot(container); // Use the container in the createRoot call
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
