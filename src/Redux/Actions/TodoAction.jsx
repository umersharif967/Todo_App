export const ACTION_ADD_TODO = (data) => {
    return{
        type: "ACTIONADDTODO",
        payload:{
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const ACTION_DEL_TODO = (index) => {
  return {
    type: "ACTIONDELTODO",
    payload: {
      index: index
    },
  };
};