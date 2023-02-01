import ACTIONS from '../app.constant';
const usestates = {
	edit:true,
	index:'',
	text:[]
};
function stateReducer(state = usestates, action) {
	switch (action.type) {
	case ACTIONS.EDIT_STATE: {
		const { pop } = action.payload;
		return { state,edit : pop };
	}
	case ACTIONS.SET_INDEX: {
		const { indexOfEdit } = action.payload;
		return { state,index : indexOfEdit };
	}
	case ACTIONS.SET_TEXT: {
		const { data } = action.payload;
		return { state,text :{ data } };
	}
	default:
		return state;
	}
}
export default stateReducer;