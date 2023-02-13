import ACTIONS from '../app.constant';

export const insertTodoAction = (title) => {
	return { 
		type: ACTIONS.INSERT_TODO, 
		payload:{
			title:title,
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
export const updateTodoAction = (index, title) => {
	return { 
		type: ACTIONS.UPDATE_TODO, 
		payload:{
			index:index,
			title:title
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
export const fetch_data = () => {
	// return async (dispatch)=>{
	// 	const response = fetch('https://jsonplaceholder.typicode.com/todos').then((dataJson)=>{
	// 		 dataJson.json();
	//then((data)=>{
	// console.log('data:',data);
	// });
	// });
// 	const data = response.JSON.stringify();
// 	dispatch({ 
// 		type: ACTIONS.FETCH_DATA,
// 		payload:{
// 			data
// 		}
// 	});
// };
// };
};