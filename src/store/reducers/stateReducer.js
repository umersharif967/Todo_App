import ACTIONS from '../app.constant';
const usestates = {
	edit:true,
	index:'',
	// text:'abc'
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
	// case ACTIONS.SET_TEXT: {
	// 	const { input } = action.payload;
	// 	return { state,text : input };
	// }
	default:
		return state;
	}
}
export default stateReducer;