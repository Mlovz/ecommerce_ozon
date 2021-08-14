import { CATEGORY_ACTIONS } from "../actions/categoryAction";

const initialState = {
    loading: false,
	arrCategory: [],
};

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case CATEGORY_ACTIONS.ADD_CATEGORY:
			return {
                ...state,
                arrCategory: [...state.arrCategory, action.payload]
            }
		case CATEGORY_ACTIONS.LOADING_CATEGORY:
			return {
                ...state,
                loading: action.payload
            }
		case CATEGORY_ACTIONS.GET_CATEGORY:
			return {
                ...state,
                arrCategory: action.payload.category
            };
        default:
            return state
	}
};

export default categoryReducer
