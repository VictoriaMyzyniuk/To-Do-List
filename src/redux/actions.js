export const addToDo = (title, description) => {
  return {
    type: 'toDo/addToDo',
    payload: {
      title,
      description,
      status: false,
    },
  };
};

export const toggleStatus = toDoId => {
  return {
    type: 'toDo/toggleStatus',
    payload: toDoId,
  };
};
