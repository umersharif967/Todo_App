const initialData = {
  list: [],
};
const TodoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ACTIONADDTODO":
     { const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };}
    case "ACTIONDELTODO": {
      const { index } = action.payload;
      state.list.splice(index, 1);
      return {
        ...state,
        list: [...state.list],
      };
    }
    case "loadBackToInputfield":{
      const { index, data } = action.payload;
      return {
         list:[state.list.slice(index,index+1)]
    }
    }

    default:
      return state;
  }
};

export default TodoReducers;
