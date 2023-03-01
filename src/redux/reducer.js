import { createSlice } from '@reduxjs/toolkit';

const toDoInitialState = {
  toDoItems: [],
  currentId: 1,
};

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState: toDoInitialState,
  reducers: {
    addToDo(state, action) {
      state.toDoItems.push({ ...action.payload, id: state.currentId });
      state.currentId += 1;
    },
    toggleStatus(state, action) {
      state.toDoItems = state.toDoItems.map(item => {
        if (item.id !== action.payload) {
          return item;
        } else {
          return { ...item, status: !item.status };
        }
      });
    },
  },
});

export const { addToDo } = toDoSlice.actions;

export const toDoReducer = toDoSlice.reducer;
