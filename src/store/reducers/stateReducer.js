const edit = true;
const stateReducer = (state=edit, action)=>{
	switch (action.type) {
	case 'EDIT_STATE':{
		const{ pop } = action.payload;
		return state === pop;
	}
	default:
		return state;
	}
};
export default stateReducer;

