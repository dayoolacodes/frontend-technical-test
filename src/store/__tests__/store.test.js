import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../modalSlice';

describe('Redux Store', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        modal: modalReducer,
      },
    });
  });

  it('should have an initial state', () => {
    const initialState = store.getState();
    const expectedInitialState = {
      modal: {
        isOpen: false,
        vehicleId: null,
      },
    };

    expect(initialState).toEqual(expectedInitialState);
  });

  it('should dispatch actions and update the state', () => {
    store.dispatch({
      type: 'modal/openModal',
      payload: { vehicleId: '123' },
    });

    const updatedState = store.getState();

    const expectedState = {
      modal: {
        isOpen: true,
        vehicleId: '123',
      },
    };

    expect(updatedState).toEqual(expectedState);
  });
});
