import ACTIONS from '../app.constant';
const initialData={
	list:[],
};
const todoReducer = (state=initialData, action)=>{
	switch (action.type) {
	case ACTIONS.INSERT_TODO:{
		const{ title, id } = action.payload;
		return{
			...state,
			list:[
				...state.list,{
					id:id,
					title:title
				}
			]
		};
	}
	
	case ACTIONS.DELETE_TODO:{
		const{ index } = action.payload;
		 state.list.splice(index,1);
		return{
			...state,
			list:[
				...state.list
			]
		};
	}
	case ACTIONS.UPDATE_TODO:{
		const{ index,title } = action.payload;
		 state.list.splice(index,1,{ title } );
		return{
			...state,
			list:[
				...state.list
			]
		};
	}
	default:
		return state;
	}
};
export default todoReducer;