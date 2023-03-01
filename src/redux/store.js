import { toDoReducer } from './reducer';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { toDo: toDoReducer },

  devTools: process.env.NODE_ENV === 'development',
});
