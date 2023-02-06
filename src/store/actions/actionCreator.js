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
export const setEdit = (edit) => {
	return { 
		type: ACTIONS.SET_EDIT,
		payload:{
			edit
		}
	};
};
export const setIndex = (indexOfEdit) => {
	return { 
		type: ACTIONS.SET_INDEX,
		payload:{
			indexOfEdit
		}
	};
};
export const inputText = (text) => {
	return { 
		type: ACTIONS.SET_TEXT,
		payload:{
			text
		}
	};
};