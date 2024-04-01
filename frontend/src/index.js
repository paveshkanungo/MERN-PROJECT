import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { Toaster } from "react-hot-toast";

const options = {
  position: "top-center",
  duration: 5000,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <Toaster {...options} />
  </Provider>
);

