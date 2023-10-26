import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import modalReducer from '../store/modalSlice';

export default function renderWithProviders(
  ui,
  { preloadedState = {}, ...renderOptions } = {}
) {
  const store = configureStore({
    reducer: { modal: modalReducer },
    preloadedState,
  });

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
