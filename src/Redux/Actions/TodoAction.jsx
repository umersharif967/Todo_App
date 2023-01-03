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
export const load_Back_To_Input_field = (index,data) => {
  return {
    type: "loadBackToInputfield",
    payload: {
      index:index,
      data:data
    },
  };
};