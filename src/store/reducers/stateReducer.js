import ACTIONS from '../app.constant';
const usestates = {
	edit:false,
	index:undefined,
	text:'',
};
function stateReducer(state = usestates, action) {
	switch (action.type) {
	case ACTIONS.SET_EDIT: {
		const { edit } = action.payload;
		return { ...state,edit : edit };
	}
	case ACTIONS.SET_INDEX: {
		const { indexOfEdit } = action.payload;
		return { ...state,index : indexOfEdit };
	}
	case ACTIONS.SET_TEXT: {
		const { text } = action.payload;
		return { ...state, text: text  };
	}
	default:
		return state;
	}
}
export default stateReducer;