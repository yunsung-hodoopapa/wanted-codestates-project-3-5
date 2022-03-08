import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
