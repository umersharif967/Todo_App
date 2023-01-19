import ACTIONS from '../app.constant';

export const insertTodoAction = (data) => {
	return { 
		type: ACTIONS.INSERT_TODO, 
		payload:{
			data:data,
			id: new Date().getTime().toString()
		} 
	};
};
export const deleteTodoAction = (index) => {
	return { 
		type: ACTIONS.DELETE_TODO, 
		payload:{
			index:index
		} 
	};
};
export const updateTodoAction = (index, data) => {
	return { 
		type: ACTIONS.UPDATE_TODO, 
		payload:{
			index:index,
			data:data
		} 
	};
};
export const editState = (pop) => {
	return { 
		type: ACTIONS.EDIT_STATE,
		payload:{
			pop:pop
		}
	};
};
export const setIndex = (indexOfEdit) => {
	return { 
		type: ACTIONS.SET_INDEX,
		payload:{
			indexOfEdit:indexOfEdit
		}
	};
};
// export const setText = (input) => {
// 	return { 
// 		type: ACTIONS.SET_TEXT,
// 		payload:{
// 			input:input
// 		}
// 	};
// };

//UMAR Follow function names pattern