import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './sass/main.scss';
import VehicleList from './components/VehicleList';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <VehicleList />
    </Provider>
  </React.StrictMode>,
  document.querySelector('.root')
);
