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
            id:id,
            data:data,
          }
        ]
      };
    // case "ACTIONDELTODO":
    //   return {
    //   };
    default:
      return state;
  }
};

export default TodoReducers;
