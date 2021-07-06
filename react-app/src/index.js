import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ThemeProvider } from './context/ThemeContext';

const store = configureStore();

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Root />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
