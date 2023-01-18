import ACTIONS from '../app.constant';
const usestates = {
	edit:true,
};
function stateReducer(state = usestates, action) {
	switch (action.type) {
	case ACTIONS.EDIT_STATE: {
		const { pop } = action.payload;
		return state === pop;
	}
	default:
		return state;
	}
}
export default stateReducer;