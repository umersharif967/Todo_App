import ACTIONS from '../app.constant';


export const insertTodoAction = (payload) => {
	return { type: ACTIONS.SET_TODO_LIST, payload };
};


//UMAR Follow function names pattern 