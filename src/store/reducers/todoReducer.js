const initialData={
	list:[],
};
const todoReducer = (state=initialData, action)=>{
	switch (action.type) {
	case 'INSERT_TODO':{
		const{ data, id } = action.payload;
		return{
			...state,
			list:[
				...state.list,{
					id:id,
					data:data
				}
			]
		};
	}
	case 'DELETE_TODO':{
		const{ index } = action.payload;
		 state.list.splice(index,1);
		return{
			...state,
			list:[
				...state.list
			]
		};
	}
	case 'UPDATE_TODO':{
		const{ index,data } = action.payload;
		 state.list.splice(index,1,{ data } );
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