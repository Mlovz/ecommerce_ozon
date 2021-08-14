import { GLOBALTYPES } from "./globalTypes";
import { ImageUpload } from "../../utils/ImageUpload";
import {
	deleteDataApi,
	getDataApi,
	postDataApi,
    putDataApi,
} from "../../utils/fetchDataApi";

export const CATEGORY_ACTIONS = {
	ADD_CATEGORY: "ADD_CATEGORY",
	LOADING_CATEGORY: "LOADING_CATEGORY",
	GET_CATEGORY: "GET_CATEGORY",
    DELETE_CATEGORY: "DELETE_CATEGORY"
};

export const addCategory =
	({ name, auth }) =>
	async (dispatch) => {
		try {
			if (name === "")
				return dispatch({
					type: GLOBALTYPES.ALERT,
					payload: { error: "Заполните поле ввода!" },
				});

			dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

			const res = await postDataApi("category", { name }, auth.token);

			dispatch({
				type: CATEGORY_ACTIONS.ADD_CATEGORY,
				payload: res.data.newCategory,
			});

			dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
		} catch (err) {
			dispatch({
				type: GLOBALTYPES.ALERT,
				payload: { error: err.response.data.msg },
			});
		}
	};

export const getCategory = () => async (dispatch) => {
	try {
		dispatch({ type: CATEGORY_ACTIONS.LOADING_CATEGORY, payload: true });

		const res = await getDataApi("category");

		dispatch({ type: CATEGORY_ACTIONS.GET_CATEGORY, payload: res.data });

		dispatch({ type: CATEGORY_ACTIONS.LOADING_CATEGORY, payload: false });
	} catch (err) {
		dispatch({
			type: GLOBALTYPES.ALERT,
			payload: { error: err.response.data.msg },
		});
	}
};

export const deleteCategory = (id, token) => async (dispatch) => {
	try {
		dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

		await deleteDataApi(`category/${id}`, token);
        

		dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
	} catch (err) {
		dispatch({
			type: GLOBALTYPES.ALERT,
			payload: { error: err.response.data.msg },
		});
	}
};

export const updateCategory = (id, name, token) => async (dispatch) => {
	try {
        console.log(id, name, token);
		dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

        const res = await putDataApi(`category/${id}`, {name}, token)
        console.log(res);

		dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
	} catch (err) {
		dispatch({
			type: GLOBALTYPES.ALERT,
			payload: { error: err.response.data.msg },
		});
	}
};