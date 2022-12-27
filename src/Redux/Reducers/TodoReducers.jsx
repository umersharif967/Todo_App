const initialData = {
  list: [],
};
const TodoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ACTIONADDTODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "ACTIONDELTODO":
      {var { index } = action.payload;
      state.list.splice(index, 1);
      return {
        ...state,
        list: [...state.list],
      };}
    case "HANDLEEDITTODO":
      {const { index } = action.payload;
      const editTodo = state.list.slice(index);
      return {
        ...state,
        list: [{editTodo}],
        
      };}

    default:
      return state;
  }
};

export default TodoReducers;
