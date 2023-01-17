const edit = true;




const state_reducer = (state=edit, action)=>{
	switch (action.type) {
	case 'edit_state':{
		const{ pop } = action.payload;
		return state === pop;
	}
	
 
	default:
		return state;
	}
};
export default state_reducer;