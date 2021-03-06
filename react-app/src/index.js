import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeContext, useThemeContext } from './context/ThemeContext'
import { createTheme } from '@material-ui/core/styles';
import { ModalProvider } from './context/Modal';

const store = configureStore();

const button = createTheme({
  palette: {
    primary: {
      main: '#388e3c'
    }
  }
})

const Root = () => {
  
  return (
    <ModalProvider>
    <ThemeProvider button={button}>
      <App />
    </ThemeProvider>
    </ModalProvider>
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
