import ACTIONS from '../app.constant';
const usestates = {
	edit:true,
	index:''
};
function stateReducer(state = usestates, action) {
	switch (action.type) {
	case ACTIONS.EDIT_STATE: {
		const { pop } = action.payload;
		return { state,edit : pop };
	}
	case ACTIONS.SET_INDEX: {
		const { index } = action.payload;
		return { state,index : index };
	}
	default:
		return state;
	}
}
export default stateReducer;