import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './components/Counters/counterSlice';

export const store = configureStore({
  reducer: {
    counterReducer: counterSlice
  },
})