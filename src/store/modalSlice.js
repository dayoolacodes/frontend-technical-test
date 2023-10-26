import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    vehicleId: null
  },
  reducers: {
    openModal: (state, action) => {
      return { ...state, isOpen: true, vehicleId: action.payload.vehicleId };
    },
    closeModal: (state) => {
      return { ...state, isOpen: false, vehicleId: null };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
