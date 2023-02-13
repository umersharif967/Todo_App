import ACTIONS from '../app.constant';
const initialData={
	fetchData:[],
};
const fetchReducer = (state=initialData, action) => {
	switch (action.type) {
	case ACTIONS.FETCH_DATA: {
		const{ data } = action.payload;
		return { ...state,fetchData : { data } };
	}
	default:
		return state;
	}
};

export default fetchReducer;






